import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMonitorTabComponent } from './main-monitor-tab.component';

describe('MainMonitorTabComponent', () => {
  let component: MainMonitorTabComponent;
  let fixture: ComponentFixture<MainMonitorTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMonitorTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMonitorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
