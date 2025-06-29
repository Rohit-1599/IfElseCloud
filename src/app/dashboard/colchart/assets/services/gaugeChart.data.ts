const value = 80;
const textvalue = 240;
const textcolor = 'black';

export const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { ctx, chartArea } = chart;
    const { width, height } = chartArea;

    ctx.save();

    // Calculate center coordinates of semicircle
    const x = width / 2;
    // For semicircle, vertical center is about 3/4 down the canvas height
    const y = height * 0.85;

    ctx.font = 'bold 3rem Arial';
    ctx.fillStyle = textcolor; // black text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(textvalue, x, y);

    ctx.restore();
  },
};

const data = {
  datasets: [
    {
      data: [value, 100 - value],
      borderRadius: 7,
      cutout: '80%',
      backgroundColor(ctx) {
        if (ctx.type !== 'data') {
          return;
        }
        if (ctx.index === 1) {
          return 'rgb(234, 234, 234)';
        }
        return '#6343C0';
      },
    },
  ],
};
const annotation = {
  type: 'doughnutLabel',
  drawTime: 'beforeDraw',
  position: {
    y: '-50%',
  },
  font: [{ size: 50, weight: 'bold' }, { size: 20 }],
  color: ({ chart }) => ['#6343C0', 'grey'],
};
export const gauge_config = {
  type: 'doughnut',
  data,
  options: {
    aspectRatio: 2,
    circumference: 180,
    rotation: -90,
    plugins: {
      annotation: {
        annotations: {
          annotation,
        },
      },
      centerText: {},
    },
  },
  plugins: [centerTextPlugin],
};
