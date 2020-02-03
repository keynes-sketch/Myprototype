import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentregisterPage } from './studentregister.page';

describe('StudentregisterPage', () => {
  let component: StudentregisterPage;
  let fixture: ComponentFixture<StudentregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
