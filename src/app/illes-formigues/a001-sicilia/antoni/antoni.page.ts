import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antoni',
  templateUrl: './antoni.page.html',
  styleUrls: ['./antoni.page.scss'],
})
export class AntoniPage implements OnInit {

  choosenOption=0;

  constructor() { }

  ngOnInit() {
  }

  option(c){
    switch(c){
      case 1:
        this.choosenOption=1;
        break;
      case 2:
        this.choosenOption=2;
        break;

    }

  }
}
