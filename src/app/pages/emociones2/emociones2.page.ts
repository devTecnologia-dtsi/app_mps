import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataSubModule } from 'src/app/interfaces/interfaces';
import { MessageService } from 'src/app/services/message.service';
import { UniminutoService } from 'src/app/services/uniminuto.service';

@Component({
  selector: 'app-emociones2',
  templateUrl: './emociones2.page.html',
  styleUrls: ['./emociones2.page.scss'],
})
export class Emociones2Page implements OnInit {

  isLoading: boolean = false;
  id: string | null;
  content: Array<DataSubModule> = [];

  constructor(
    private navCotroller: NavController,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
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

  volver() {
    this.navCotroller.pop();
  }

  nextPage(url: string) {
    this.navCotroller.navigateForward(url);
  }

  getUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  home(){
    this.navCotroller.navigateBack('/dashboard');
  }
}
