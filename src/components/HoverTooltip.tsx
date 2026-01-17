import React from 'react';
import { Tooltip } from 'antd';

// 定义hover提示组件的属性接口
export interface HoverTooltipProps {
  content?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  // 如果没有提供content，可以使用默认数据
  defaultData?: {
    projects?: string;
    cum_actual?: string;
    cum_plan?: string;
    output_result?: string;
  };
}

// 定义详细信息的接口
export interface DetailInfo {
  label: string;
  value: string;
  highlight?: boolean;
}

// 定义详细信息组件的属性接口
export interface DetailCardProps {
  infos: DetailInfo[];
  title?: string;
}

// 详细信息卡片组件
export const DetailCard: React.FC<DetailCardProps> = ({ infos, title }) => {
  return (
    <div style={{ padding: '0.5rem', minWidth: '200px', backgroundColor: '#fff' }}>
      {title && (
        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', paddingBottom: '0.25rem', borderBottom: '1px solid #eee' }}>
          {title}
        </div>
      )}
      <div>
        {infos.map((info, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <span style={{ color: '#666' }}>{info.label}:</span>
            <span style={{ fontWeight: info.highlight ? 'bold' : 'normal', color: info.highlight ? '#52c41a' : '#333' }}>
              {info.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// hover提示组件
export const HoverTooltip: React.FC<HoverTooltipProps> = ({ 
  content,
  title = "Production Details",
  children, 
  defaultData
}) => {
  // 如果没有提供content，但提供了defaultData，则创建默认的详细信息
  const tooltipContent = content || defaultData ? (
    <DetailCard 
      title={title}
      infos={[
        { label: 'projects', value: defaultData?.projects || 'V53' },
        { label: 'cum_actual', value: defaultData?.cum_actual || '30,600.4K' },
        { label: 'cum_plan', value: defaultData?.cum_plan || '30,359.0K' },
        {
          label: 'Output Result', 
          value: defaultData?.output_result || 'Great!',
          highlight: true
        },
      ]}
    />
  ) : <span>Detailed information</span>;
  
  // 使用最简单的Tooltip配置来测试基本功能
  return (
    <Tooltip title={tooltipContent} >
      <div style={{ display: 'inline-block', cursor: 'pointer' }}>
        {children}
      </div>
    </Tooltip>
  );
};

// 导出组件和类型
export default HoverTooltip;
