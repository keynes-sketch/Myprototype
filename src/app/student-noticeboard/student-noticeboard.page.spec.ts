import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentNoticeboardPage } from './student-noticeboard.page';

describe('StudentNoticeboardPage', () => {
  let component: StudentNoticeboardPage;
  let fixture: ComponentFixture<StudentNoticeboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNoticeboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentNoticeboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
