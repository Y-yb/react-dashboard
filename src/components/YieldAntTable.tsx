import React from "react";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import "antd/dist/reset.css";
import "./TransparentTable.css";
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
      render: (value: YieldCell) => (
        <div style={{ textAlign: "left", padding: "1px 0" }}>
          <div
            style={{
              fontSize: "0.9rem",
              fontWeight: "bold",
              color: value.color || defaultTextColor,
            }}
          >
            {value.value}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: value.color || defaultTargetColor,
            }}
          >
            Target:{value.target}
          </div>
        </div>
      ),
    },
    {
      title: "BGA/Chassis",
      dataIndex: "col1",
      key: "col1",
      align: "center" as const,
      render: (value: YieldCell) => (
        <div style={{ textAlign: "center", padding: "1px 0" }}>
          <div
            style={{
              fontSize: "0.9rem",
              fontWeight: "bold",
              color: value.color || defaultTextColor,
            }}
          >
            {value.value}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: value.color || defaultTargetColor,
            }}
          >
            Target:{value.target}
          </div>
        </div>
      ),
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

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: backgroundColor,
        padding: "1rem",
        borderRadius: "0.5rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 标题区域 */}
      <div
        style={{
          textAlign: "left",
          marginBottom: "0.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: titleColor,
            margin: 0,
            display: "inline-block",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "normal",
              color: titleColor,
              marginLeft: "0.5rem",
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* 表格区域 */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Table
          styles={styleProps}
          columns={tableColumns}
          dataSource={tableData}
          pagination={false}
          scroll={{}}
          bordered={false}
          size="large"
          className="transparent-table" // 添加透明类名
          style={{
            height: "100%",
            border: "none", // 确保表格无边框
            backgroundColor: "transparent", // 确保表格背景透明
          }}
          rowHoverable={false}
          tableLayout="auto"
        />
      </div>
    </div>
  );
};

export default YieldAntTable;
