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
  public category = [];

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

    this.chartService.data().subscribe((value)=>{
      let a= value.length;
      let obj;

      for(let i=0; i<a; i++){
        this.chart.removePoint(i);
       let name = value[i].name;
        let cant = value[i].cant;
        obj = {name:name, y:cant};
        this.chart.addPoint(obj);
      }
    });

    let pie= new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Produccion De Juguetes Pie'
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
        name: 'Empleado',
        data: []
      }]
    });

    this.chart = pie;
  }


  lineChart( ){



    this.chartService.data().subscribe((value)=>{
      setTimeout(()=>{
      let a= value.length;
      let time = value[0].time;
      let hour = new Date(time).getHours();
      let minutes = new Date(time).getMinutes()
      let second = new Date(time).getSeconds();
      this.category.push(hour+":"+minutes+":"+second);

      //let obj;
      for(let i=0; i<a; i++){

        let name = value[i].name;
        let timeByToy = value[i].timeByToy; 
        //obj = {name: name, data:timeByToy};
        //this.series[i] = {name:name, data: [timeByToy]};
        //console.log(this.series);
        this.line.addPoint(timeByToy,[i]);
      }},1000);
    });

    let line= new Chart({
       chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'line'
      },
      title: {
        text: 'Tiempo Produccion'
    },

    subtitle: {
        text: 'Source: github.com/fredarcito'
    },
    xAxis: {
        categories: this.category
    },

    yAxis: {
        title: {
            text: 'Tiempo'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 0
        }
    },
      series:[{
        name: "Marcos",
        data: []
      },
      {
        name: "Fabian",
        data: []
      },
      {
        name: "Andres",
        data: []
      },
      {
        name: "Melisa",
        data: []
      }
      ]
    });


    this.line = line;
  }


  borrar(){
      this.chart.removePoint(0);
      console.log("borrado");
  }

  }



