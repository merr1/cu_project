import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
})
export class HorizontalMenuComponent implements OnInit {
  constructor(private http: HttpClient, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  words: any;
  lang: any;

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.http
      .get(`http://localhost:3000/information/${this.lang}`)
      .subscribe((words) => (this.words = words));
  }
}
