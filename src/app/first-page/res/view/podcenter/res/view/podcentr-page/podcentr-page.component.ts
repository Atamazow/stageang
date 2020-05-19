import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-podcentr-page',
  templateUrl: './podcentr-page.component.html',
  styleUrls: ['./podcentr-page.component.css']
})
export class PodcentrPageComponent implements OnInit {
  @Input()img;
  @Input() category;
  @Input()text;
  @Input()btn;

  constructor() { }

  ngOnInit(): void {
  }

}
