import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Schedule2Page } from './schedule2.page';

describe('Schedule2Page', () => {
  let component: Schedule2Page;
  let fixture: ComponentFixture<Schedule2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schedule2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Schedule2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
