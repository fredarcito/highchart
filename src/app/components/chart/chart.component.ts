import { Component, OnInit } from '@angular/core';
import { HighchartService } from '../../services/highchart.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

	//pie = this.chartService.pie;
  public pie;
	public line;
  public data = this.chartService.data();

  constructor( private chartService : HighchartService ) { 
      this.pieChart(this.data);
      //this.lineChart(this.data);
  		
   }

  ngOnInit() {
  		setInterval(()=>{
  			this.pie.addPoint({name: 'Marcos', y: Math.floor(Math.random() * 100)});
  		}, 3000);
   }

  addPoint() {
    this.pie.addPoint({name: 'Marcos', y:  Math.floor(Math.random() * 100)});
  }
 
   pieChart( data ){
    console.log("line");
    console.log(data);

    let provi = data;

    console.log("provi");
    console.log(provi);
    provi.options.chart.type = "pie";
    this.pie = data;
    
  }

   lineChart( data ){
    console.log("line");
    console.log(data);

    let provi = data;

    console.log("provi");
    console.log(provi);
    provi.options.chart.type = "line";
    this.line = data;
    
  }

}
