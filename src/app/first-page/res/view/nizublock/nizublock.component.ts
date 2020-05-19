import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from "../../../../store-todos.service";

@Component({
  selector: 'app-nizublock',
  templateUrl: './nizublock.component.html',
  styleUrls: ['./nizublock.component.css']
})
export class NizublockComponent implements OnInit {

  constructor( private store4:StoreTodosService) { }
  getItems(){
    return this.store4.events;
  }

  ngOnInit(): void {
  }

}
