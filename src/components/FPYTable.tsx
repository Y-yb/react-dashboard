import React from "react";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import HoverTooltip from "./HoverTooltip";

// 定义每日数据结构
interface DailyData {
  value: string;
  trend: "up" | "down" | null;
  color: "green" | "orange";
}

// 定义站点数据结构
interface SiteData {
  name: string;
  weeklyTarget: string;
  dailyData: DailyData[];
}

// 定义项目数据结构
interface ProjectData {
  name: string;
  sites: SiteData[];
}

// 定义FPYTable属性
interface FPYTableProps {
  title: string;
  projects: ProjectData[];
  dates: string[];
}

const FPYTable: React.FC<FPYTableProps> = ({ title, projects, dates }) => {
  // 生成扁平化数据
  const generateFlatData = () => {
    const data: any[] = [];
    projects.forEach((project) => {
      project.sites.forEach((site, siteIndex) => {
        const row: any = {
          key: `${project.name}-${site.name}`,
          project: siteIndex === 0 ? project.name : "",
          projectRowSpan: siteIndex === 0 ? project.sites.length : 0,
          site: site.name,
          weeklyTarget: site.weeklyTarget,
        };
        
        // 添加每日数据
        dates.forEach((date, index) => {
          row[date] = site.dailyData[index];
        });
        
        data.push(row);
      });
    });
    return data;
  };

  const dataSource = generateFlatData();

  // 生成趋势图标
  const renderTrendIcon = (trend: "up" | "down" | null) => {
    if (!trend) return null;
    return trend === "up" ? "▲" : "▼";
  };

  // 渲染每日数据
  const renderDailyData = (dailyData: DailyData) => {
    const { value, trend, color } = dailyData;
    return (
      <HoverTooltip>
        <div style={{ 
          color: color === "green" ? "#4CAF50" : "#FF9800",
          fontWeight: "bold"
        }}>
          {value} {renderTrendIcon(trend)}
        </div>
      </HoverTooltip>
    );
  };

  // 定义列
  const columns: ColumnType<any>[] = [
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      align: "left" as const,
      width: 80,
      render: (text: string, record: any) => {
        return record.projectRowSpan > 0 ? {
          children: <div style={{ fontWeight: "bold" }}>{text}</div>,
          props: {
            rowSpan: record.projectRowSpan,
          },
        } : {
          props: {
            rowSpan: 0,
          },
        };
      },
    },
    {
      title: "site",
      dataIndex: "site",
      key: "site",
      align: "left" as const,
      width: 100,
    },
    {
      title: "wk Tar",
      dataIndex: "weeklyTarget",
      key: "weeklyTarget",
      align: "left" as const,
      width: 80,
      render: (text: string) => {
        return <div style={{ fontWeight: "bold" }}>{text}</div>;
      },
    },
    ...dates.map((date) => ({
      title: date,
      dataIndex: date,
      key: date,
      align: "left" as const,
      width: 100,
      render: renderDailyData,
    })),
  ];

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "bold" }}>
        {title}
      </h2>
      <Table 
        columns={columns} 
        dataSource={dataSource}
        pagination={false}
        bordered
        size="small"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default FPYTable;
export type { ProjectData, SiteData, DailyData };
