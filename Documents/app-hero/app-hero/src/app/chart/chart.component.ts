import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {

  constructor() { }

 
  chart;
  
  ngAfterViewInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ["asdf", "§asdf"],
        datasets: [
          { 
            data: [1,2],
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: [1,2],
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
