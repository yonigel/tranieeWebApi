import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTabFooterComponent } from './data-tab-footer.component';

describe('DataTabFooterComponent', () => {
  let component: DataTabFooterComponent;
  let fixture: ComponentFixture<DataTabFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTabFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTabFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
