import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';

//Servicios
import { HighchartService } from './services/highchart.service';

//HighChart
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [HighchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
