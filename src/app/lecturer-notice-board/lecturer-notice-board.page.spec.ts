import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerNoticeBoardPage } from './lecturer-notice-board.page';

describe('LecturerNoticeBoardPage', () => {
  let component: LecturerNoticeBoardPage;
  let fixture: ComponentFixture<LecturerNoticeBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerNoticeBoardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerNoticeBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
