import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataSubModule } from 'src/app/interfaces/interfaces';
import { MessageService } from 'src/app/services/message.service';
import { UniminutoService } from 'src/app/services/uniminuto.service';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.page.html',
  styleUrls: ['./organizaciones.page.scss'],
})
export class OrganizacionesPage implements OnInit {

  id: string | null = "";
  content: Array<DataSubModule> = [];
  isLoading: boolean = true;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private uniminutoService: UniminutoService,
    private messageService: MessageService,
    private sanitizer: DomSanitizer
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
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
  }

  volver() {
    this.navegarApp('dashboard');
  }

  navegarApp(page: any) {
    return this.navCtrl.navigateRoot(`/${page}`);
  }

  getUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
