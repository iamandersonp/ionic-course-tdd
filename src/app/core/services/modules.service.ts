import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  constructor() {}

  public getModuleById(id: number) {
    return of({
      id: 1,
      title: 'Module One',
      description: 'Test',
      lessons: [{ title: '1' }]
    });
  }
}
