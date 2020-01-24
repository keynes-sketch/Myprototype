import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerloginPage } from './lecturerlogin.page';

describe('LecturerloginPage', () => {
  let component: LecturerloginPage;
  let fixture: ComponentFixture<LecturerloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
