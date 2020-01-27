import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestMenupagePage } from './guest-menupage.page';

describe('GuestMenupagePage', () => {
  let component: GuestMenupagePage;
  let fixture: ComponentFixture<GuestMenupagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestMenupagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestMenupagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
