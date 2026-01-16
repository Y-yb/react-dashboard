import React from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

// 定义列数据类型
export interface YieldColumn {
  title: string;
}

// 定义行数据类型
export interface YieldRow {
  name: string;
  values: {
    value: string;
    target: string;
    color?: string;
  }[];
}

// 定义组件属性接口
export interface YieldTableProps {
  title: string;
  subtitle?: string;
  columns: YieldColumn[];
  rows: YieldRow[];
  backgroundColor?: string;
  titleColor?: string;
  defaultTextColor?: string;
  defaultTargetColor?: string;
  width?: number;
  height?: number;
  titleAlign?: 'left' | 'center' | 'right';
}

// YieldTable组件实现
const YieldTable: React.FC<YieldTableProps> = ({
  title,
  subtitle,
  columns,
  rows,
  backgroundColor = '#E8F5E9',
  titleColor = '#333333',
  defaultTextColor = '#4CAF50',
  defaultTargetColor = '#4CAF50',
  width = 600,
  height = 350,
  titleAlign = 'center',
}) => {
  // 计算表格尺寸
  const tableWidth = width;
  const tableHeight = height;
  const padding = 48; // 考虑卡片的padding
  const titleAreaHeight = Math.min(3.75, tableHeight * 0.15); // 标题区域高度，最大60px (60/16=3.75)
  const availableHeight = tableHeight - padding - titleAreaHeight;
  const cellHeight = Math.max(2.5, availableHeight / (rows.length + 2)); // 至少40px高度 (40/16=2.5)
  const cellWidth = (tableWidth - padding) / (columns.length + 1);

  // 创建ECharts配置
  const getOption = (): EChartsOption => {
    // 确保graphic始终是数组
    const graphicElements: any[] = [];

    // 背景矩形
    graphicElements.push({
      type: 'rect',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      style: {
        fill: backgroundColor,
        borderRadius: 8,
      },
    });

    // 表格起始位置
    const startY = 0; // 标题区域由React处理，这里调整起始位置

    // 表头列标题
    columns.forEach((column, index) => {
      graphicElements.push({
        type: 'text',
        left: (index + 1) * cellWidth + cellWidth / 2,
        top: startY + cellHeight / 2,
        style: {
          text: column.title,
          fontSize: Math.min(16, tableHeight * 0.04), // 自适应字体大小
          fontWeight: 'bold',
          fill: titleColor,
        },
      });
    });

    // 行数据
    rows.forEach((row, rowIndex) => {
      // 行名
      graphicElements.push({
        type: 'text',
        left: cellWidth / 2,
        top: startY + (rowIndex + 2) * cellHeight + cellHeight / 2,
        style: {
          text: row.name,
          fontSize: Math.min(16, tableHeight * 0.04), // 自适应字体大小
          fontWeight: 'bold',
          fill: titleColor,
        },
      });

      // 行值
      row.values.forEach((cell, cellIndex) => {
        // 值
        graphicElements.push({
          type: 'text',
          left: (cellIndex + 1) * cellWidth + cellWidth / 2,
          top: startY + (rowIndex + 2) * cellHeight + cellHeight / 2 - 5,
          style: {
            text: cell.value,
            fontSize: Math.min(20, tableHeight * 0.05), // 自适应字体大小
            fontWeight: 'bold',
            fill: cell.color || defaultTextColor,
          },
        });

        // 目标值
        graphicElements.push({
          type: 'text',
          left: (cellIndex + 1) * cellWidth + cellWidth / 2,
          top: startY + (rowIndex + 2) * cellHeight + cellHeight / 2 + 12,
          style: {
            text: `Target:${cell.target}`,
            fontSize: Math.min(12, tableHeight * 0.03), // 自适应字体大小
            fontWeight: 'normal',
            fill: defaultTargetColor,
          },
        });
      });
    });

    // 表格边框
    const tableHeightTotal = startY + (rows.length + 2) * cellHeight;
    
    // 外边框
    graphicElements.push(
      // 上边框
      {
        type: 'line',
        x1: 0,
        y1: startY,
        x2: tableWidth,
        y2: startY,
        style: {
          stroke: '#ccc',
          lineWidth: 1,
        },
      },
      // 下边框
      {
        type: 'line',
        x1: 0,
        y1: tableHeightTotal,
        x2: tableWidth,
        y2: tableHeightTotal,
        style: {
          stroke: '#ccc',
          lineWidth: 1,
        },
      },
      // 左边框
      {
        type: 'line',
        x1: 0,
        y1: startY,
        x2: 0,
        y2: tableHeightTotal,
        style: {
          stroke: '#ccc',
          lineWidth: 1,
        },
      },
      // 右边框
      {
        type: 'line',
        x1: tableWidth,
        y1: startY,
        x2: tableWidth,
        y2: tableHeightTotal,
        style: {
          stroke: '#ccc',
          lineWidth: 1,
        },
      }
    );

    // 列分隔线
    for (let i = 1; i <= columns.length + 1; i++) {
      graphicElements.push({
        type: 'line',
        x1: i * cellWidth,
        y1: startY,
        x2: i * cellWidth,
        y2: tableHeightTotal,
        style: {
          stroke: '#ccc',
          lineWidth: 1,
        },
      });
    }

    // 行分隔线
    for (let i = 1; i <= rows.length + 2; i++) {
      graphicElements.push({
        type: 'line',
        x1: 0,
        y1: startY + i * cellHeight,
        x2: tableWidth,
        y2: startY + i * cellHeight,
        style: {
          stroke: '#ccc',
          lineWidth: 1,
        },
      });
    }

    // 创建最终的option配置
    const option: EChartsOption = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'none',
      },
      graphic: graphicElements,
    };

    return option;
  };

  return (
    <div
      className="rounded-lg p-6 overflow-hidden"
      style={{
        backgroundColor: backgroundColor,
        width: `${width}px`,
        height: `${tableHeight}px`,
      }}
    >
      {/* 标题区域 */}
      <div
        className={`mb-4 ${titleAlign === 'left' ? 'text-left' : titleAlign === 'right' ? 'text-right' : 'text-center'}`}
        style={{ width: `${width - padding}px` }}
      >
        <h2
          style={{
            fontSize: Math.min(24, tableHeight * 0.07), // 自适应字体大小
            fontWeight: 'bold',
            color: titleColor,
            margin: 0,
            display: 'inline-block',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <span
            style={{
              fontSize: Math.min(16, tableHeight * 0.04), // 自适应字体大小
              fontWeight: 'normal',
              color: titleColor,
              marginLeft: '0.5rem',
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
      {/* 表格区域 */}
      <div
        style={{
          width: `${width - padding}px`,
          height: `${availableHeight}px`,
        }}
      >
        <ReactECharts
          option={getOption()}
          style={{ width: '100%', height: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </div>
    </div>
  );
};

export default YieldTable;
