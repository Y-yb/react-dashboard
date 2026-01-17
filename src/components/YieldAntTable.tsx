import React from "react";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import "antd/dist/reset.css";
import "./TransparentTable.css";
import HoverTooltip, { DetailCard, type DetailInfo } from "./HoverTooltip";
import LayoutGridWidget from "./LayoutGridWidget";
import ValueWithTarget from "./ValueWithTarget";

// 定义表格数据类型
interface YieldCell {
  value: string;
  target: string;
  color?: string;
}

interface YieldRow {
  name: string;
  values: YieldCell[];
}

interface YieldColumn {
  title: string;
}

// 定义组件属性接口
export interface YieldAntTableProps {
  title: string;
  subtitle?: string;
  columns: YieldColumn[];
  rows: YieldRow[];
  titleColor?: string;
  defaultTextColor?: string;
  defaultTargetColor?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

// YieldAntTable组件实现
const YieldAntTable: React.FC<YieldAntTableProps> = ({
  title,
  subtitle,
  titleColor = "#333333",
  defaultTextColor = "#4CAF50",
  defaultTargetColor = "#4CAF50",
  backgroundColor,
  width = 600,
  height = 350,
}) => {
  // 转换为Ant Design Table需要的数据格式
  const tableData = [
    {
      key: 0,
      name: "V53",
      col0: {
        value: "96.6%",
        target: "94.7%",
        color: "#4CAF50",
      },
      col1: {
        value: "99.4%",
        target: "99.2%",
        color: "#4CAF50",
      },
    },
    {
      key: 1,
      name: "V54",
      col0: {
        value: "94.9%",
        target: "94.7%",
        color: "#4CAF50",
      },
      col1: {
        value: "99.7%",
        target: "99.2%",
        color: "#4CAF50",
      },
    },
    {
      key: 2,
      name: "V57",
      col0: {
        value: "96.1%",
        target: "97.3%",
        color: "#FF9800",
      },
      col1: {
        value: "100.0%",
        target: "99.3%",
        color: "#4CAF50",
      },
    },
  ];

  // 转换为Ant Design Table需要的列配置
  const tableColumns: ColumnType<any>[] = [
    {
      title: "", // 空标题
      dataIndex: "name",
      key: "name",
      minWidth: 20,
      align: "left" as const,
      render: (text: string) => (
        <span
          style={{ fontWeight: "bold", color: titleColor, fontSize: "1rem" }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "MCH/HSG",
      dataIndex: "col0",
      key: "col0",
      minWidth: 10,
      align: "left" as const,
      render: (value: YieldCell, record: any) => {
        // 创建hover提示的详细信息
        const detailInfos: DetailInfo[] = [
          { label: 'projects', value: record.name },
          { label: 'cum_actual', value: record.name === 'V53' ? '30,600.4K' : 
                                      record.name === 'V54' ? '28,450.2K' : '25,320.8K' },
          { label: 'cum_plan', value: record.name === 'V53' ? '30,359.0K' : 
                                     record.name === 'V54' ? '28,000.0K' : '25,500.0K' },
          {
            label: 'Output Result', 
            value: record.name === 'V53' ? 'Great!' : 
                   record.name === 'V54' ? 'Good!' : 'Fair!',
            highlight: true
          },
        ];
        
        // 创建hover提示内容
        const tooltipContent = <DetailCard infos={detailInfos} title="Production Details" />;
        
        return (
          <HoverTooltip content={tooltipContent}>
            <ValueWithTarget
              value={value.value}
              target={value.target}
              valueColor={value.color}
              targetColor={value.color}
              defaultTextColor={defaultTextColor}
              defaultTargetColor={defaultTargetColor}
              textAlign="left"
            />
          </HoverTooltip>
        );
      },
    },
    {
      title: "BGA/Chassis",
      dataIndex: "col1",
      key: "col1",
      align: "center" as const,
      render: (value: YieldCell, record: any) => {
        // 创建hover提示的详细信息
        const detailInfos: DetailInfo[] = [
          { label: 'projects', value: record.name },
          { label: 'cum_actual', value: record.name === 'V53' ? '30,600.4K' : 
                                      record.name === 'V54' ? '28,450.2K' : '25,320.8K' },
          { label: 'cum_plan', value: record.name === 'V53' ? '30,359.0K' : 
                                     record.name === 'V54' ? '28,000.0K' : '25,500.0K' },
          {
            label: 'Output Result', 
            value: record.name === 'V53' ? 'Great!' : 
                   record.name === 'V54' ? 'Good!' : 'Fair!',
            highlight: true
          },
        ];
        
        // 创建hover提示内容
        const tooltipContent = <DetailCard infos={detailInfos} title="Production Details" />;
        
        return (
          <HoverTooltip content={tooltipContent}>
            <ValueWithTarget
              value={value.value}
              target={value.target}
              valueColor={value.color}
              targetColor={value.color}
              defaultTextColor={defaultTextColor}
              defaultTargetColor={defaultTargetColor}
              textAlign="center"
            />
          </HoverTooltip>
        );
      },
    },
  ];

  const styleProps: any = {
    root: {
      borderRadius: "0.5rem",
      cellPaddingBlock: 120,
    },
    header: {
      cell: {
        padding: "2px 0.375rem",
        color: "#000",
      },
    },
    body: {
      cell: {
        padding: "0.375rem",
      },
    },
  };

  // 创建表格组件
  const tableComponent = (
    <Table
      styles={styleProps}
      columns={tableColumns}
      dataSource={tableData}
      pagination={false}
      scroll={{}}
      bordered={false}
      size="large"
      className="transparent-table"
      style={{
        height: "100%",
        border: "none",
        backgroundColor: "transparent",
      }}
      rowHoverable={false}
    />
  );

  // 使用LayoutGridWidget包装表格组件
  return (
    <LayoutGridWidget
      title={title}
      subtitle={subtitle}
      backgroundColor={backgroundColor || "rgb(225,247,238)"}
      width={width}
      height={height}
    >
      {tableComponent}
    </LayoutGridWidget>
  );
};

export default YieldAntTable;
