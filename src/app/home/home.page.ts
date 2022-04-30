import { Component } from '@angular/core';
import { Module } from '../core/interfaces/module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  modules: Module[] = [
    { id: 1, title: 'Module One', description: 'Test' },
    { id: 2, title: 'Module Two', description: 'Test' },
    { id: 3, title: 'Module Three', description: 'Test' },
    { id: 4, title: 'Module Four', description: 'Test' },
    { id: 5, title: 'Module Five', description: 'Test' }
  ];

  constructor() {}
}
