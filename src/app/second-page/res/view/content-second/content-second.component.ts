import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from "../../../../store-todos.service";

@Component({
  selector: 'app-content-second',
  templateUrl: './content-second.component.html',
  styleUrls: ['./content-second.component.css']
})
export class ContentSecondComponent implements OnInit {

  constructor( private store8:StoreTodosService) { }
  footerIcons = this.store8.footerIcons

  ngOnInit(): void {
  }

}
