import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HighchartService } from '../../services/highchart.service'
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

	//pie = this.chartService.pie;
  public chart;
  public line;

  constructor( private chartService : HighchartService ) { 
    this.pieChart();
    this.lineChart();

  }

  ngOnInit() {
     //this.chartService.data().subscribe((value)=>console.log(value))
   }

   addPoint() {
    //this.pie.addPoint({name: 'Marcos', y:  Math.floor(Math.random() * 100)});
  }

  pieChart( ){

    let pie= new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Produccion De Juguetes'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        data: []
      }]
    });

    let data=[];

    this.chartService.data().subscribe((value)=>{
      let a= value.length;
      let obj;

      for(let i=0; i<a; i++){
       let name = value[i].name;
        let cant = value[i].cant;
        obj = {name:name, y:cant};
        data.push(obj);
        this.line.addPoint(obj);
      }
      
      data = [];
    });


    this.chart = pie;
  }


  lineChart( ){

    let line= new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'line'
      },
      title: {
        text: 'Produccion De Juguetes'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        data: []
      }]
    });

    let data=[];

    this.chartService.data().subscribe((value)=>{
      let a= value.length;
      let obj;

      for(let i=0; i<a; i++){
        let timeByToy = value[i].timeByToy;
        let time = value[i].time;
        obj = {name:timeByToy, y:time};
        this.chart.addPoint(obj);
      }
      
    });


    this.line = line;
  }
  }

}