import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartConfigService } from './assets/services/chartConfig.service';
import { ChartConfig } from './assets/models/chartConfig.model';

import { UserService } from '../assets/services/user.service';
import SubscriptionHandler from '../../assets/services/subscriptionHandler.service';
import { gauge_config } from './assets/services/gaugeconfig.service';
import { GridData } from '../../assets/models/grid.model';

@Component({
  selector: 'app-colchart',
  templateUrl: './colchart.component.html',
  styleUrl: './colchart.component.scss',
  providers: [SubscriptionHandler],
})
export class ColchartComponent implements OnInit, AfterViewChecked {
  @ViewChild('gaugeChart') chart: ElementRef;

  public barchartdata: ChartConfig;
  public gaugeConf: any;

  value = 80;
  constructor(
    private chartconfig: ChartConfigService,
    private sub: SubscriptionHandler,
    private userserv: UserService,
    // private gaugeconfig: GaugeconfigService,
    private changedetect: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    Chart.register(...registerables);
    this.barchartdata = this.chartconfig.data;
    this.gaugeConf = gauge_config;
  }

  ngAfterViewChecked(): void {
    this.userserv.user$.pipe(this.sub.takeUntilOrDestroy).subscribe({
      next: (data: GridData) => {
        this.gaugeConf = gauge_config;
        this.changedetect.detectChanges();
      },
    });
  }
}
