import {
  ComponentFixture,
  TestBed,
  waitForAsync
} from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [
        {
          provide: NavController,
          useValue: {
            navigateForward: jest.fn()
          }
        }
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a modules class member that contains 5 items', () => {
    expect(component.modules.length).toBe(5);
  });

  it('openModule() should navigate to the LessonListPage', () => {
    const navCtrl =
      fixture.debugElement.injector.get(NavController);
    const testModule = { title: 'pretend module', id: 1 };

    component.openModule(testModule.id);

    expect(navCtrl.navigateForward).toHaveBeenCalledWith(
      '/module/' + testModule.id
    );
  });
});
