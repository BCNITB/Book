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
      case 1: // perseguir-lladre
        this.choosenOption=1;
        break;
      case 2: // calmar-amic
        this.choosenOption=2;
        break;
      case 3: // continuar-persecucio
        this.choosenOption=3;
        break;
      case 4: // deixar-persecucio
        this.choosenOption=4;
        break;
      case 5: // duur-bossa
        this.choosenOption=5;
        break;
      case 6: // avançar
        this.choosenOption=6;
        break;
    }

  }
}
