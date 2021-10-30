import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      renderTo: 'container',
      type: 'column',
      backgroundColor: '#262D47',
      options3d: {
        enabled: true,
        alpha: 16,
        beta: 0,
        depth: 100,
        viewDistance: 25
      }
    },
    title: {
      text: 'Most expenssive cars',
      style: {"color": 'white'}
    },
    plotOptions: {
      column: {
        depth: 55
      }
    },
    xAxis: {
      labels: {
        style: {
          color: 'white'
        }
      },
      categories: [
        'BMW',
        'VW',
        'Opel',
        'AUDI',
        'Mercedes',
        'Others'
      ],
    },
    yAxis: {
      labels: {
        style: {
          color: 'white'
        }
      }
    },
    series: [{
      showInLegend: false,
      data:[50000, 30000, 20000, 40000, 50000, 20000],
      dataLabels: {
        style: {"color": 'white'},
      }
    }]
  }

}
