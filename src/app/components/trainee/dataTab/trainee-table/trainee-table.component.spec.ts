import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeTableComponent } from './trainee-table.component';

describe('TraineeTableComponent', () => {
  let component: TraineeTableComponent;
  let fixture: ComponentFixture<TraineeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
