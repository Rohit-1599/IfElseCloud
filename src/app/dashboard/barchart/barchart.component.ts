import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, ChartData } from 'chart.js';

type dataobj = {
  lables: string[];
  datasets: Object[];
};

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss',
})
export class BarchartComponent {
  @ViewChild('myCanvas', { static: true })
  chartRef!: ElementRef<HTMLCanvasElement>;

  @Input('data')
  data: any = {};

  ngAfterViewInit(): void {
    const charter = new Chart(this.chartRef.nativeElement, this.data);
  }
}
