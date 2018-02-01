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

  constructor( private chartService : HighchartService ) { 
    this.pieChart();

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
        this.chart.addPoint(obj);
      }
      
      data = [];
    });


    this.chart = pie;
  }


  lineChart(){
    let line= new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares January, 2015 to May, 2015'
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
      console.log(line);
      let obj;

      for(let i=0; i<a; i++){
        let time = value[i].time;
        let timeToy = value[i].timeByToy;
        obj = {name:timeToy, y:time};
        data.push(obj);
      }

      this.chart.addPoint(data);
        //pie.options.series[0].data = data;
        console.log(data);
        data = [];

      });


    let array = [{
      name: 'IE',
      y: 56.33
    }, {
      name: 'Chrome',
      y: 24.03,
      sliced: true,
      selected: true
    }, {
      name: 'Firefox',
      y: 10.38
    }, {
      name: 'Safari',
      y: 4.77
    }, {
      name: 'Opera',
      y: 0.91
    }, {
      name: 'Other',
      y: 0.2
    }] 

    line.options.series[0].data = array;


  }

}