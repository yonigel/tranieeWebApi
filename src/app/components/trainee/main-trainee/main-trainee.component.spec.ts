import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTraineeComponent } from './main-trainee.component';

describe('MainTraineeComponent', () => {
  let component: MainTraineeComponent;
  let fixture: ComponentFixture<MainTraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
