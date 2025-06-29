import { Injectable } from '@angular/core';
import { ChartConfig } from '../models/chartConfig.model';
import { ChartType } from '../models/chattype.enums';
import { barlabels, datasets, barchart_options } from './barChart.data';

@Injectable({ providedIn: 'root' })
export class ChartConfigService {
  public data: ChartConfig = BarChartConfig;
}

const BarChartConfig: ChartConfig = {
  type: ChartType.BAR_CHART,
  data: {
    labels: barlabels,
    datasets: datasets,
  },
  options: barchart_options,
};
