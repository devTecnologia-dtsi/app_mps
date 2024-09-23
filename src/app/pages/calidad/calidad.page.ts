import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { read } from 'fs';
import { DataSubModule } from 'src/app/interfaces/interfaces';
import { MessageService } from 'src/app/services/message.service';
import { UniminutoService } from 'src/app/services/uniminuto.service';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.page.html',
  styleUrls: ['./calidad.page.scss'],
})
export class CalidadPage implements OnInit {

  id: string | null = "";
  content: Array<DataSubModule> = [];
  isLoading: boolean = true;
  pdf: SafeResourceUrl;
  pdfTemp: any

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private uniminutoService: UniminutoService,
    private messageService: MessageService,
    private sanitizer: DomSanitizer
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  ngOnInit() {
    if (this.id) {
      this.isLoading = true;
      this.uniminutoService.getSubModules(this.id)
        .subscribe(({ resp, data }) => {
          this.isLoading = false;
          if (resp) {
            this.content = data;
          } else {
            this.messageService.presentToastMsg('¡Ups! No se ha configurado este modulo, comuníquese con el administrado', 'danger')
          }
        })
    }

    this.uniminutoService.readFile('../../../assets/pdf/hablemos-sexualidad.pdf').subscribe(data => {
      this.blobToBase64(data).then(e => {
        this.pdfTemp = e;
        this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfTemp)
      })
    });
  }

  blobToBase64(blob: Blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  volver() {
    this.navegarApp('dashboard');
  }

  getUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  navegarApp(page: any) {
    return this.navCtrl.navigateRoot(`/${page}`);
  }

}