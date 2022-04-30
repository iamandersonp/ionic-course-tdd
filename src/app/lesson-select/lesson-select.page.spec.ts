import {
  ComponentFixture,
  TestBed,
  waitForAsync
} from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap
} from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { of } from 'rxjs';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

import { ModulesService } from '../core/services/modules.service';

import { LessonSelectPage } from './lesson-select.page';

describe('LessonSelectPage', () => {
  let component: LessonSelectPage;
  let fixture: ComponentFixture<LessonSelectPage>;

  const testModule = {
    id: 1,
    title: 'test',
    description: 'test',
    lessons: [
      { title: 'lesson 1' },
      { title: 'lesson 2' },
      { title: 'lesson 3' },
      { title: 'lesson 4' }
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LessonSelectPage],
      providers: [
        {
          provide: NavController,
          useValue: {
            navigateForward: jest.fn()
          }
        },
        {
          provide: ModulesService,
          useValue: {
            getModuleById: jest
              .fn()
              .mockReturnValue(of(testModule))
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ id: '1' }))
          }
        }
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('module$ should be a stream of the module matching the id passed in', () => {
    const modulesService: any =
      fixture.debugElement.injector.get(ModulesService);

    const observerSpy = subscribeSpyTo(component.module$);

    expect(
      modulesService.getModuleById
    ).toHaveBeenCalledWith(1);
    expect(observerSpy.getLastValue()).toEqual(testModule);
  });
});
