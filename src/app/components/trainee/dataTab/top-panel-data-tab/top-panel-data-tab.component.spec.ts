import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPanelDataTabComponent } from './top-panel-data-tab.component';

describe('TopPanelDataTabComponent', () => {
  let component: TopPanelDataTabComponent;
  let fixture: ComponentFixture<TopPanelDataTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPanelDataTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPanelDataTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
