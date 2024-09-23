import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CambioContrasena } from 'src/app/interfaces/interfaces';
import { LocalService } from 'src/app/services/local.service';
import { MessageService } from 'src/app/services/message.service';
import { UniminutoService } from 'src/app/services/uniminuto.service';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  vista: any = 'uniminuto';
  isLoading: Boolean = false;
  isChangePass: Boolean = false;

  usuario = {
    correoInstitucional: '',
    //correoInstitucional: 'rmarentes@uniminuto.edu',
    //correoInstitucional: 'esthefanya.canon@uniminuto.edu.co',
    password: ''
    //password: 'i@nDr3sM0209*'
    //password: 'Es625591'
  };

  cambioContrasena: CambioContrasena = {
    email: '',
    contrasena: '',
    confirmarContrasena: '',
    nuevaContrasena: ''
  };

  externo = {
    correo: '',
    contraseña: ''
  }

  presentingElement: Element | null = null;

  constructor(
    private navCtrl: NavController,
    private uniminutoService: UniminutoService,
    private messageService: MessageService,
    private localService: LocalService
  ) { }

  loginUniminuto() {
    this.isLoading = true;
    this.uniminutoService.loginService(this.usuario.correoInstitucional, this.usuario.password)
      .subscribe(({ resp, message, data }) => {
        this.isLoading = false;
        if (resp) {
          this.messageService.presentToastMsg('¡Bienvenido!', 'success');
          this.localService.crearLlave('id', data.id);
          this.localService.crearLlave('correo', data.correo);
          this.localService.crearLlave('nombre', data.nombre);
          this.localService.crearLlave('identificacion', data.identificacion);
          this.localService.crearLlave('programa', data.programaPsi);
          this.navegarApp('dashboard');
        } else {
          this.messageService.presentToastMsg(message, 'danger');
        }
      });
  }

  segmentChanged(ev: any) {
    this.vista = ev;
  }

  navegarApp(page: any) {
    return this.navCtrl.navigateRoot(`/${page}`);
  }

  changeView(view: string) {
    this.vista = view;
  }

  cambiarContrasena() {
    this.isChangePass = true;
    this.uniminutoService.changePassword(this.cambioContrasena)
      .subscribe(({ resp, message }) => {
        this.isChangePass = false;
        if (resp) {
          this.messageService.presentToastMsg(message, 'success');
          this.changeView('uniminuto');
        } else {
          this.messageService.presentToastMsg(message, 'danger');
        }
      });
  }

}
