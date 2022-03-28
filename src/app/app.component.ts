import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inici', url: '/folder', icon: 'home' },
    { title: 'Guardar', url: '/save', icon: 'bookmark' },
    { title: 'Carregar', url: '/pages/load', icon: 'archive' },
    { title: 'El meu llibre', url: '/el-meu-llibre', icon: 'book' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
