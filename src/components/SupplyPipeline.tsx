import React from "react";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import HoverTooltip from "./HoverTooltip";

// 定义数据结构
interface SupplyData {
  id: string;
  category: string;
  subcategory: string;
  ship: number;
  shipFormatted: string;
  shipTarget: number;
  oqcPack: number;
  oqcPackFormatted: string;
  oqcPackTarget: number;
  oqc: number;
  oqcFormatted: string;
  oqcTarget: number;
  color?: string;
  rowSpan?: number;
}

interface SupplyPipelineProps {
  data: SupplyData[];
  title?: string;
}

const SupplyPipeline: React.FC<SupplyPipelineProps> = ({
  data,
  title = "Supply Pipeline",
}) => {
  // 计算最大值用于条形图宽度
  const getMaxValue = () => {
    return Math.max(
      ...data.map((item) =>
        Math.max(
          item.ship,
          item.shipTarget,
          item.oqcPack,
          item.oqcPackTarget,
          item.oqc,
          item.oqcTarget
        )
      )
    );
  };

  const maxValue = getMaxValue();

  // 生成条形图样式
  const getBarStyle = (value: number, color: string = "#91cc75") => {
    const width = `${(value / maxValue) * 100}%`;
    return {
      backgroundColor: color,
      height: "1rem",
      borderRadius: "0.25rem",
      width,
    };
  };

  // 生成目标值竖条样式
  const getTargetLineStyle = (targetValue: number) => {
    const position = `${(targetValue / maxValue) * 100}%`;
    return {
      position: "absolute" as const,
      left: position,
      top: 0,
      bottom: 0,
      width: "2px",
      backgroundColor: "#FF4D4F",
      borderLeft: "2px dashed #FF4D4F",
    };
  };

  // 定义表格列
  const columns: ColumnType<SupplyData>[] = [
    {
      title: "",
      dataIndex: "category",
      key: "category",
      align: "left" as const,
      width: 80,
      render: (text: string, record: SupplyData) => {
        return (record.rowSpan || 0) > 0
          ? {
              children: (
                <div className="testyyb" style={{ fontWeight: "bold" }}>
                  {text}
                </div>
              ),
              props: {
                rowSpan: record.rowSpan,
              },
            }
          : {
              props: {
                rowSpan: 0,
              },
            };
      },
    },
    {
      title: "",
      dataIndex: "subcategory",
      key: "subcategory",
      align: "left" as const,
      width: 80,
      render: (text) => <div style={{ paddingLeft: "1rem" }}>{text}</div>,
    },
    {
      title: "Output(Cum):Ship",
      dataIndex: "ship",
      key: "ship",
      align: "left" as const,
      width: 200,
      render: (value, record) => {
        return (
          <HoverTooltip>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ paddingRight: "0.5rem", width: "80px" }}>
                {record.shipFormatted}
              </div>
              <div style={{ position: "relative", flex: 1, height: "1rem" }}>
                <div style={getBarStyle(value, record.color || "#91cc75")} />
                <div style={getTargetLineStyle(record.shipTarget)} />
              </div>
            </div>
          </HoverTooltip>
        );
      },
    },
    {
      title: "Output(Cum):OQC Pack",
      dataIndex: "oqcPack",
      key: "oqcPack",
      align: "left" as const,
      width: 200,
      render: (value, record) => (
        <HoverTooltip>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                paddingRight: "0.5rem",
                width: "80px",
                color: record.color || "#91cc75",
              }}
            >
              {record.oqcPackFormatted}
            </div>
            <div style={{ position: "relative", flex: 1, height: "1rem" }}>
              <div style={getBarStyle(value, record.color || "#91cc75")} />
              <div style={getTargetLineStyle(record.oqcPackTarget)} />
            </div>
          </div>
        </HoverTooltip>
      ),
    },
    {
      title: "Output(Cum):OQC",
      dataIndex: "oqc",
      key: "oqc",
      align: "left" as const,
      width: 200,
      render: (value, record) => (
        <HoverTooltip>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ paddingRight: "0.5rem", width: "80px" }}>
              {record.oqcFormatted}
            </div>
            <div style={{ position: "relative", flex: 1, height: "1rem" }}>
              <div style={getBarStyle(value, record.color || "#91cc75")} />
              <div style={getTargetLineStyle(record.oqcTarget)} />
            </div>
          </div>
        </HoverTooltip>
      ),
    },
  ];

  return (
    <div style={{ padding: "1rem", backgroundColor: "rgb(225,247,238)" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#00008B",
        }}
      >
        {title}
      </h2>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={false}
        bordered={false}
        size="small"
        scroll={{ x: "max-content" }}
        className="transparent-table"
        style={{
          height: "100%",
          border: "none",
          backgroundColor: "transparent", // 确保表格背景透明
        }}
        // 行样式
        rowClassName={(_, index) => {
          let className = "";
          if (index > 0) {
            className += "border-t-0";
          }
          return className;
        }}
        rowHoverable={false}
      />
    </div>
  );
};

export default SupplyPipeline;
