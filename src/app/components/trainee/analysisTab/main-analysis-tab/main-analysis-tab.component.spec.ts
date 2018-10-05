import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAnalysisTabComponent } from './main-analysis-tab.component';

describe('MainAnalysisTabComponent', () => {
  let component: MainAnalysisTabComponent;
  let fixture: ComponentFixture<MainAnalysisTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAnalysisTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAnalysisTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
