import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerMenupagePage } from './lecturer-menupage.page';

describe('LecturerMenupagePage', () => {
  let component: LecturerMenupagePage;
  let fixture: ComponentFixture<LecturerMenupagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerMenupagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerMenupagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
