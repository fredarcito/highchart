import { Component, OnInit } from '@angular/core';
import { HighchartService } from '../../services/highchart.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

	chart = this.chartService.chart;
	data;


  constructor( private chartService : HighchartService ) { 
  		this.data = this.chartService.data();
  		console.log(this.data);
   }

  ngOnInit() { }

  addPoint() {
    this.chart.addPoint({name: 'Marcos', y: 27.2});
  }
 

}
