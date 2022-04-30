import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';

import { ModulesService } from '../core/services/modules.service';

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.page.html',
  styleUrls: ['./lesson-select.page.scss']
})
export class LessonSelectPage implements OnInit {
  params: Params;
  module$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.modulesService.getModuleById(
        parseInt(params.get('id'), 10)
      )
    )
  );

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private modulesService: ModulesService
  ) {}

  ngOnInit() {}
}
