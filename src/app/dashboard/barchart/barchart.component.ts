import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss',
})
export class BarchartComponent {
  @ViewChild('myCanvas', { static: true })
  chartRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const charter = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            borderWidth: 0,
            backgroundColor: [
              'red',
              'blue',
              'yellow',
              'green',
              'purple',
              'orange',
            ],
            borderRadius: 100, // Rounded corners
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            beginAtZero: true,
          },
        },
      },
    });
  }
}
