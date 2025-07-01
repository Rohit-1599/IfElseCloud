import { DataSet } from '../models/datasets.model';

export const barlabels: string[] = [
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

  'Dec',
];

export const bar_borderrad = 10;
export const bar_barthickness = 40;

export const dataset1: DataSet = {
  data: [20, 30, 15, 20, 25, 40, 35, 20, 25, 30, 15, 10],
  backgroundColor: '#6343C0',
  maxBarThickness: bar_barthickness,
};

export const dataset2: DataSet = {
  data: [30, 40, 25, 35, 30, 25, 30, 40, 35, 25, 30, 40],
  backgroundColor: '#9979E6',
  maxBarThickness: bar_barthickness,
};

export const dataset3: DataSet = {
  data: [50, 40, 45, 55, 45, 35, 35, 40, 40, 45, 55, 90],
  backgroundColor: '#EBECF0',
  maxBarThickness: bar_barthickness,
  borderRadius: bar_borderrad,
};

export const datasets: DataSet[] = [dataset1, dataset2, dataset3];

export const barchart_options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months',
        font: {
          size: 14,
          weight: 'bold',
        },
      },
      stacked: true,
      grid: {
        display: false,
        color: '#c8c8c8',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Security Rating',
        font: {
          size: 14,
          weight: 'bold',
        },
      },
      stacked: true,
      grid: {
        color: '#f7f2f2',
      },
      min: 0,
      suggestedMax: 110,
      ticks: {
        stepSize: 20,
      },
    },
  },
};
