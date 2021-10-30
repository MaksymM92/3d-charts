import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: '#262D47',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Most popular cars',
      style: {"color": 'white'}
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Most popular cars',
      data: [
        ['BMW', 45.0],
        ['VW', 26.8],
        ['Opel', 12.8],
        ['AUDI', 8.5],
        ['Mercedes', 6.2],
        ['Others', 0.7]
      ]
    }]
  }
}

