import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDataTabComponent } from './main-data-tab.component';

describe('MainDataTabComponent', () => {
  let component: MainDataTabComponent;
  let fixture: ComponentFixture<MainDataTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDataTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDataTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
