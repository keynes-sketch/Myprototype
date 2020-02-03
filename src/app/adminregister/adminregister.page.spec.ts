import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ADMINregisterPage } from './adminregister.page';

describe('ADMINregisterPage', () => {
  let component: ADMINregisterPage;
  let fixture: ComponentFixture<ADMINregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADMINregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ADMINregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
