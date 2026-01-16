import ReactECharts from 'echarts-for-react';

interface KpiProps {
  title: string;
  value: string;
  color: string;
}

export default function EChartKpi({ title, value, color }: KpiProps) {
  const option = {
    graphic: [
      {
        type: 'rect',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        style: {
          fill: color,
          opacity: 0.1,
          borderRadius: 8,
        },
      },
      {
        type: 'text',
        left: '1rem',
        top: '1rem',
        style: {
          text: title,
          fontSize: 14,
          fill: '#333',
        },
      },
      {
        type: 'text',
        left: '1rem',
        top: '3rem',
        style: {
          text: value,
          fontSize: 24,
          fontWeight: 'bold',
          fill: '#333',
        },
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: '数据刷新频率：每5分钟<br>数据源：HSG、Trace(ro LY)',
    },
  };

  return (
    <div className="p-2">
      <ReactECharts option={option} style={{ height: '7.5rem', width: '12.5rem' }} />
    </div>
  );
}