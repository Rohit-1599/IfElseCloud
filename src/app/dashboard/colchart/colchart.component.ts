import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-colchart',
  templateUrl: './colchart.component.html',
  styleUrl: './colchart.component.scss',
})
export class ColchartComponent {}
