import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-center-page',
  templateUrl: './center-page.component.html',
  styleUrls: ['./center-page.component.css']
})
export class CenterPageComponent implements OnInit {

      @Input()img;
      @Input()category;
      @Input()text;
      @Input()btn;

  constructor() { }

  ngOnInit(): void {
  }

}
