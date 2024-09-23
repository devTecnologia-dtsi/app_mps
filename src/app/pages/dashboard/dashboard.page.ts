import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataModules } from 'src/app/interfaces/interfaces';
import { LocalService } from 'src/app/services/local.service';
import { MessageService } from 'src/app/services/message.service';
import { UniminutoService } from 'src/app/services/uniminuto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  componentes: Array<DataModules> = [];
  isLoading: boolean = true;

  images: string[] = [
    'assets/img/imagen_fondo1.png',
    'assets/img/imagen_fondo2.png',
    'assets/img/imagen_fondo3.png'
  ];

  constructor(
    private navCtrl: NavController,
    private uniminutoService: UniminutoService,
    private messageService: MessageService,
    private localService: LocalService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.uniminutoService.getModules()
      .subscribe(({ resp, data }) => {
        this.isLoading = false;
        if (resp) {
          this.componentes = data;
        } else {
          this.messageService.presentToastMsg('¡Ups! Hubo un error, comunicate con el administrador', 'danger');
        }
      })
  }

  paginas(pag: string, id: number) {
    this.navCtrl.navigateForward(`${pag}/${id}`)
  }

  navegarApp(page: string, id: number) {
    return this.navCtrl.navigateRoot(`/${page}/${id}`);
  }

  salir() {
    this.localService.limpiarLlaves();
    return this.navCtrl.navigateRoot(`/home`);
  }

}
