import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YearPlannerPage } from './year-planner.page';

describe('YearPlannerPage', () => {
  let component: YearPlannerPage;
  let fixture: ComponentFixture<YearPlannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearPlannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YearPlannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
