import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from "../../../store-todos.service";

@Component({
  selector: 'app-foother',
  templateUrl: './foother.component.html',
  styleUrls: ['./foother.component.css']
})
export class FootherComponent implements OnInit {

  constructor(private store7:StoreTodosService) { }

       footerIcons = this.store7.footerIcons;
       solution = this.store7.solution;
       whyWibbitz = this.store7.whyWibbitz;
       resFooter = this.store7.resFooter;
       company = this.store7.company;
       legalLink = this.store7.legalLink;




  ngOnInit(): void {
  }

}
