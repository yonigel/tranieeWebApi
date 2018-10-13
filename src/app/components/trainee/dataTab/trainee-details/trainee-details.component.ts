import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { TraineeService } from '../../../../services/traineeService/trainee.service';
import { Trainee } from '../../../../models/trainee.model';

@Component({
  selector: 'app-trainee-details',
  templateUrl: './trainee-details.component.html',
  styleUrls: ['./trainee-details.component.css']
})
export class TraineeDetailsComponent implements OnInit, OnChanges {

  @Input()
  selectedTraineeId;

  private selectedTrainee: Trainee;

  constructor(private traineeService: TraineeService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if (propName === 'selectedTraineeId') {
        console.log('changed');
        this.loadSelectedTrainee();
      }
    }
  }

  private loadSelectedTrainee(): void {
    console.log(`loading trainee ${this.selectedTraineeId}`);
    this.traineeService.getAllTraineeis().subscribe(data => {
      this.selectedTrainee = data.filter((trainee => trainee.id === this.selectedTraineeId))[0];
      console.log(this.selectedTrainee);
    });
  }

}
