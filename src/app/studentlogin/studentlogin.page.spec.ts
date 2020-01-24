import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentloginPage } from './studentlogin.page';

describe('StudentloginPage', () => {
  let component: StudentloginPage;
  let fixture: ComponentFixture<StudentloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
