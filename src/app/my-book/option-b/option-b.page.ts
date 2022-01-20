import { Component, OnInit } from '@angular/core';

//import { Sounds } from 'src/app/enums/sounds';

@Component({
  selector: 'app-option-b',
  templateUrl: './option-b.page.html',
  styleUrls: ['./option-b.page.scss'],
})
export class OptionBPage implements OnInit {

  /*sound:any;
  audio:any;*/

  constructor() { }

  ngOnInit() {
  }

  /*start(){
    this.sound=this.getSound(1);
    this.reproducir(this.sound);
  }

  getSound(c){
    return Sounds[c];
  }

  reproducir(c){
    this.audio = new Audio(c);
    this.audio.load();
    this.audio.play();
  }*/
}