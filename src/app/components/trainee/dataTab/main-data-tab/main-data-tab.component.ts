import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TraineeService } from '../../../../services/traineeService/trainee.service';

@Component({
  selector: 'app-main-data-tab',
  templateUrl: './main-data-tab.component.html',
  styleUrls: ['./main-data-tab.component.css']
})
export class MainDataTabComponent implements OnInit {

  private trainees: Observable<any>;
  private selectedTraineeId: number;

  constructor(private traineeService: TraineeService) { }

  ngOnInit() {
    this.trainees = this.traineeService.getAllTraineeis();
  }

  private onSelectedTrainee(traineeId: number): void {
    console.log(`onSelectedTrainee ${traineeId}`);
    this.selectedTraineeId = traineeId;
  }
}
