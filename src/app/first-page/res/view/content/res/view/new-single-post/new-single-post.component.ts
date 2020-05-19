import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-single-post',
  templateUrl: './new-single-post.component.html',
  styleUrls: ['./new-single-post.component.css']
})
export class NewSinglePostComponent implements OnInit {
        @Input()img;
        @Input()category;
        @Input()text;
        @Input()btn;




  constructor() { }

  ngOnInit(): void {
  }

}
