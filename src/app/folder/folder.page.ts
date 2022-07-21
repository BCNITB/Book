import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularDelegate } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  
  /* TODO: Afegir el títol del nou llibre a l'array inferior. Els títols s'han de separar per una coma i anar entrre "" (cometes dobles)*/
  llibres:string[]=["/el-meu-llibre", "/la-girafa-i-el-conill"];

  constructor(private router: Router) { }

  openBook(a:number){
    this.router.navigate([this.llibres[a]]);
  }
}
