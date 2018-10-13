import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TraineeService } from '../../../../services/traineeService/trainee.service';
import { Trainee } from '../../../../models/trainee.model';

@Component({
  selector: 'app-top-panel-data-tab',
  templateUrl: './top-panel-data-tab.component.html',
  styleUrls: ['./top-panel-data-tab.component.css']
})
export class TopPanelDataTabComponent implements OnInit {

  @Input()
  selectedTraineeId: string;


  private filterFormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filterFormGroup = this.formBuilder.group({
      filter: ['']
    });
  }

  private onFilterChanged(event): void {
    console.log(`onFilterChanged() ${this.filterFormGroup.controls.filter.value}`);
  }

  private addTrainee(): void {
    console.log(`addTrainee()`);
  }

  private removeTrainee(): void {
    console.log(`removeTrainee() ${this.selectedTraineeId}`);
  }

}
