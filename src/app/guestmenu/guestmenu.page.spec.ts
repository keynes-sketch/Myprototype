import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestmenuPage } from './guestmenu.page';

describe('GuestmenuPage', () => {
  let component: GuestmenuPage;
  let fixture: ComponentFixture<GuestmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
