import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditclientPage } from './editclient.page';

describe('EditclientPage', () => {
  let component: EditclientPage;
  let fixture: ComponentFixture<EditclientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditclientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
