import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartConfigService } from './assets/services/chartConfig.service';
import { ChartConfig } from './assets/models/chartConfig.model';
import { gauge_config } from './assets/services/gaugeChart.data';

@Component({
  selector: 'app-colchart',
  templateUrl: './colchart.component.html',
  styleUrl: './colchart.component.scss',
})
export class ColchartComponent implements OnInit {
  @ViewChild('gaugeChart') chart: ElementRef;

  public barchartdata: ChartConfig;
  public gaugeConf: any;

  value = 80;
  constructor(private chartconfig: ChartConfigService) {}

  ngOnInit(): void {
    Chart.register(...registerables);
    this.barchartdata = this.chartconfig.data;
    this.gaugeConf = gauge_config;
  }
}
