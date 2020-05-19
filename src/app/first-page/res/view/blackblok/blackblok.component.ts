import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from "../../../../store-todos.service";

@Component({
  selector: 'app-blackblok',
  templateUrl: './blackblok.component.html',
  styleUrls: ['./blackblok.component.css']
})
export class BlackblokComponent implements OnInit {

  constructor( private store6:StoreTodosService) { }
  getItems(){
    return this.store6.blackBlok
  }

  ngOnInit(): void {
  }

}
