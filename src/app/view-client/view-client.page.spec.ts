import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewClientPage } from './view-client.page';

describe('ViewClientPage', () => {
  let component: ViewClientPage;
  let fixture: ComponentFixture<ViewClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
