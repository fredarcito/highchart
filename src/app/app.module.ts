import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';

//Servicios
import { HighchartService } from './services/highchart.service';

//HighChart
import { ChartModule } from 'angular-highcharts';
import { CreateChartComponent } from './components/create-chart/create-chart.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CreateChartComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [HighchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
