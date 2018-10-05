import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../../../../services/traineeService/trainee.service';
import { Trainee } from '../../../../models/trainee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trainee-table',
  templateUrl: './trainee-table.component.html',
  styleUrls: ['./trainee-table.component.css']
})
export class TraineeTableComponent implements OnInit {

  private trainees: Observable<any>;

  constructor(private traineeService: TraineeService) { }

  ngOnInit() {
    this.trainees = this.traineeService.getAllTraineeis();

  }

}
