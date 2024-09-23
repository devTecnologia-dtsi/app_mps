import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataSubModule } from 'src/app/interfaces/interfaces';
import { MessageService } from 'src/app/services/message.service';
import { UniminutoService } from 'src/app/services/uniminuto.service';

@Component({
  selector: 'app-estimulacion',
  templateUrl: './estimulacion.page.html',
  styleUrls: ['./estimulacion.page.scss'],
})
export class EstimulacionPage implements OnInit {

  isLoading: boolean = false;
  id: string | null;
  content: Array<DataSubModule> = [];

  constructor(
    private navController: NavController,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private uniminutoService: UniminutoService,
    private messageService: MessageService
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

  getUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  volver() {
    this.navController.pop();
  }

  home(){
    this.navController.navigateBack('/dashboard');
  }

}
