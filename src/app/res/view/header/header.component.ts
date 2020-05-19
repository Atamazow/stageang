import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from "../../../store-todos.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private servis:StoreTodosService ) { }


  getItems(){


    return this.servis.nav;

  }

  ngOnInit(): void {
  }

}
