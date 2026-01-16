import React from "react";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import "./TransparentTable.css";

// 定义子列数据类型
interface UnknownSubColumnValue {
  value: string;
}

// 定义行数据类型
interface UnknownRow {
  name: string;
  values: UnknownSubColumnValue[];
}

// 定义列组数据类型
interface UnknownColumnGroup {
  title: string;
  subColumns: string[];
}

// 定义组件属性接口
export interface UnknownTableProps {
  title: string;
  columnGroups: UnknownColumnGroup[];
  rows: UnknownRow[];
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
}

// UnknownTable组件实现
const UnknownTable: React.FC<UnknownTableProps> = ({
  title,
  columnGroups,
  rows,
  backgroundColor = "#E3F2FD",
  titleColor = "#333333",
  textColor = "#666666",
  width = 600,
  height = 350,
}) => {
  // 转换为Ant Design Table需要的数据格式
  const tableData = rows.map((row, rowIndex) => {
    const data: any = { key: rowIndex, name: row.name };
    row.values.forEach((value, colIndex) => {
      data[`col${colIndex}`] = value;
    });
    return data;
  });

  // 构建列配置，支持列组
  const tableColumns: ColumnType<any>[] = [
    {
      title: "", // 空标题
      dataIndex: "name",
      key: "name",
      width: 20,
      align: "left" as const,
      render: (text: string) => (
        <span
          style={{ fontWeight: "bold", color: titleColor, fontSize: "1rem" }}
        >
          {text}
        </span>
      ),
    },
    // 处理列组
    ...columnGroups.map((group, groupIndex) => {
      // 如果只有一个列组且只有一个子列，直接返回普通列
      if (columnGroups.length === 1 && group.subColumns.length === 1) {
        return {
          title: group.title,
          dataIndex: `col${groupIndex}`,
          key: `group${groupIndex}`,
          align: "center" as const,
          render: (value: UnknownSubColumnValue) => (
            <div style={{ textAlign: "center", padding: "0.5rem 0" }}>
              <span style={{ fontSize: "1rem", color: textColor }}>
                {value.value}
              </span>
            </div>
          ),
        };
      }

      // 否则创建列组
      return {
        title: group.title,
        key: `group${groupIndex}`,
        children: group.subColumns.map((subColumn, subColumnIndex) => {
          const actualColumnIndex =
            columnGroups
              .slice(0, groupIndex)
              .reduce((sum, g) => sum + g.subColumns.length, 0) +
            subColumnIndex;

          return {
            title: subColumn,
            dataIndex: `col${actualColumnIndex}`,
            key: `col${actualColumnIndex}`,
            align: "center" as const,
            render: (value: UnknownSubColumnValue) => (
              <div style={{ textAlign: "center", padding: "0.5rem 0" }}>
                <span style={{ fontSize: "0.8rem", color: textColor }}>
                  {value.value}
                </span>
              </div>
            ),
          };
        }),
      };
    }),
    
  ];

  tableColumns.splice(2, 0, {
    title: "", // 空标题
    dataIndex: "name",
    key: "name",
    width: 20,
    align: "left" as const,
    render: (text: string) => (
      <span
        style={{ fontWeight: "bold", color: titleColor, fontSize: "1rem" }}
      >
        {text}
      </span>
    ),
  });

  const styleProps: any = {
    root: {
      borderRadius: 8,
      cellPaddingBlock: 120,
    },
    header: {
      cell: {
        padding: "0.1rem 0.375rem",
        color: "#000",
      },
    },
    body: {
      cell: {
        padding: "0.175rem",
      },
    },
  };

  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
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
          }}
        >
          {title}
        </h2>
      </div>

      {/* 表格区域 */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Table
          columns={tableColumns}
          dataSource={tableData}
          pagination={false}
          styles={styleProps}
          scroll={{}}
          bordered={false}
          size="large"
          className="transparent-table"
          style={{
            height: "100%",
            border: "none",
            backgroundColor: "transparent", // 确保表格背景透明
          }}
          rowHoverable={false}
        />
      </div>
    </div>
  );
};

export default UnknownTable;
