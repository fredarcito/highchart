import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';



@Injectable()
export class HighchartService {


	basicData = [ //datos que representan la cantidad y tiempo de produccion de juguetes por empleado
	{name:"Marcos", cant: 15, timeByToy:4, time: 1517407236669},
	{name:"Fabian", cant: 62, timeByToy:1, time: 1517407236669},
	{name:"Andres", cant: 23, timeByToy:2, time: 1517407236669},
	{name:"Melissa", cant: 45, timeByToy:3, time: 1517407236669}
	];


	constructor() {
	}

	data():Observable<any[]>{
		return new Observable<any[]>((observer)=>{
			setInterval(()=>{
				const time = Date.now();
				const newData = this.basicData.map(item=>{
					return {
						name: item.name,
						cant : Math.floor(Math.random()*100),
						timeByToy : Math.floor(Math.random()*10),
						time
					};	
				});

				observer.next(newData);
			}, 5000);
		});
	}


}



