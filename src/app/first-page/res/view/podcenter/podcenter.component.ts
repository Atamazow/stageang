import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from "../../../../store-todos.service";

@Component({
  selector: 'app-podcenter',
  templateUrl: './podcenter.component.html',
  styleUrls: ['./podcenter.component.css']
})
export class PodcenterComponent implements OnInit {

  constructor( private store5:StoreTodosService) { }
   getItems(){
    return this.store5.popularRes;
   }

  ngOnInit(): void {
  }

}
