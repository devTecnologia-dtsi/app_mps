import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataSubModule } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  @Input() subModule: Array<DataSubModule> = [];
  @ViewChild('templateContent')
  templateContent!: TemplateRef<any>;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  getUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
