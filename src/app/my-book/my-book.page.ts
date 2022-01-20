import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.page.html',
  styleUrls: ['./my-book.page.scss'],
})
export class MyBookPage implements OnInit {

  numPage=0;

  constructor() { }

  ngOnInit() {
  }

  turnPage(){
    this.numPage=1;
  }

}