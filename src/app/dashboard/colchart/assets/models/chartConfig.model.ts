import { DataSet } from './datasets.model';

export interface ChartConfig {
  type: string;
  data: DataSet;
  options?: any;
  plugins?: [];
}
