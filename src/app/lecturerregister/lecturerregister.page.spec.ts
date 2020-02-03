import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerregisterPage } from './lecturerregister.page';

describe('LecturerregisterPage', () => {
  let component: LecturerregisterPage;
  let fixture: ComponentFixture<LecturerregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
