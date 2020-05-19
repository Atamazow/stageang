import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nizublock-page',
  templateUrl: './nizublock-page.component.html',
  styleUrls: ['./nizublock-page.component.css']
})
export class NizublockPageComponent implements OnInit {

  @Input()img;
  @Input()category;
  @Input()text;
  @Input()btn;

  constructor() { }

  ngOnInit(): void {
  }

}
