import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentsmenuPage } from './studentsmenu.page';

describe('StudentsmenuPage', () => {
  let component: StudentsmenuPage;
  let fixture: ComponentFixture<StudentsmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
