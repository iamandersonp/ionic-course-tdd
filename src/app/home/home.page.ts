import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Module } from '../core/interfaces/module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  modules: Module[] = [
    {
      id: 1,
      title: 'Module One',
      description: 'Test',
      lessons: [{ title: '1' }]
    },
    {
      id: 2,
      title: 'Module Two',
      description: 'Test',
      lessons: [{ title: '1' }]
    },
    {
      id: 3,
      title: 'Module Three',
      description: 'Test',
      lessons: [{ title: '1' }]
    },
    {
      id: 4,
      title: 'Module Four',
      description: 'Test',
      lessons: [{ title: '1' }]
    },
    {
      id: 5,
      title: 'Module Five',
      description: 'Test',
      lessons: [{ title: '1' }]
    }
  ];

  constructor(private navCtrl: NavController) {}

  openModule(id: number) {
    this.navCtrl.navigateForward('/module/' + id);
  }
}
