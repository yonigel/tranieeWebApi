import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainDataTabComponent } from './components/trainee/dataTab/main-data-tab/main-data-tab.component';
import { TopPanelDataTabComponent } from './components/trainee/dataTab/top-panel-data-tab/top-panel-data-tab.component';
import { TraineeTableComponent } from './components/trainee/dataTab/trainee-table/trainee-table.component';
import { TraineeDetailsComponent } from './components/trainee/dataTab/trainee-details/trainee-details.component';
import { DataTabFooterComponent } from './components/trainee/dataTab/data-tab-footer/data-tab-footer.component';
import { MainAnalysisTabComponent } from './components/trainee/analysisTab/main-analysis-tab/main-analysis-tab.component';
import { MainMonitorTabComponent } from './components/trainee/monitorTab/main-monitor-tab/main-monitor-tab.component';
import { MainTraineeComponent } from './components/trainee/main-trainee/main-trainee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainDataTabComponent,
    TopPanelDataTabComponent,
    TraineeTableComponent,
    TraineeDetailsComponent,
    DataTabFooterComponent,
    MainAnalysisTabComponent,
    MainMonitorTabComponent,
    MainTraineeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
