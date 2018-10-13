import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TraineeService } from '../../../../services/traineeService/trainee.service';
import { Trainee } from '../../../../models/trainee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trainee-table',
  templateUrl: './trainee-table.component.html',
  styleUrls: ['./trainee-table.component.css']
})
export class TraineeTableComponent implements OnInit {

  @Input()
  private trainees: Observable<any>;

  @Output()
  private traineeSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private selectedTrainee(index: number): void {
    console.log(`selectedTrainee ${index}`);
    this.traineeSelected.emit(index);
  }

}
