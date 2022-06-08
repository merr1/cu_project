import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  lang: any;
  constructor() {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }
  changeLanguage(lang: any) {
    console.log(lang);
    localStorage.setItem('lang', lang);
  }
}
