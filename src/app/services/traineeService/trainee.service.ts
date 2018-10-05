import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { Observable } from 'rxjs';
import { Trainee } from '../../models/trainee.model';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor(private httpService: HttpService) { }

  getAllTraineeis(): Observable<Trainee> {
    console.log(`getAllTraineeis()`);
    return this.httpService.get(`assets/trainees.json`);
  }

  getSingleTrainee(id: string): Observable<any> {
    return new Observable<any>();
  }

  createNewTrainee(trainee: Trainee): Observable<any> {
    return new Observable<any>();
  }

  deleteTrainee(id: string): Observable<any> {
    return new Observable<any>();
  }

  modifyTrainee(modifiedTrainee: Trainee): Observable<any> {
    return new Observable<any>();
  }
}
