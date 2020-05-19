import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from "../../../../store-todos.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor( private service2: StoreTodosService ) { }
  getItems(){
      return this.service2.sidebar;
}

  ngOnInit(): void {
  }

}
