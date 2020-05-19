import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from "../../../../store-todos.service";

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
})
export class CenterComponent implements OnInit {
  constructor( private service3:StoreTodosService) {}
  getItems(){
 return this.service3.blogPosts;
}

  ngOnInit(): void {}
}
