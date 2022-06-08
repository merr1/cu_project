import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss'],
})
export class ContextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
