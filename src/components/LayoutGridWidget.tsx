import React from "react";

// 定义LayoutGridWidget的属性接口
export interface LayoutGridWidgetProps {
  // 组件标题
  title: string;
  // 组件副标题（可选）
  subtitle?: string;
  // 要显示的内容（表格或其他组件）
  children: React.ReactNode;
  // 背景颜色
  backgroundColor?: string;
  // 标题颜色
  titleColor?: string;
  // 宽度
  width?: number;
  // 高度
  height?: number;
  // 样式配置
  styles?: {
    container?: React.CSSProperties;
    title?: React.CSSProperties;
    content?: React.CSSProperties;
  };
}

// LayoutGridWidget组件实现
const LayoutGridWidget: React.FC<LayoutGridWidgetProps> = ({
  title,
  subtitle,
  children,
  backgroundColor = "#E3F2FD",
  titleColor = "#333333",
  width = 400,
  height = 400,
  styles = {},
}) => {
  // 合并默认样式和用户自定义样式
  const containerStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor,
    padding: "1rem",
    borderRadius: "0.5rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    ...styles.container,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: titleColor,
    margin: 0,
    display: "inline-block",
    ...styles.title,
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    overflow: "hidden",
    ...styles.content,
  };

  return (
    <div style={containerStyle}>
      {/* 标题区域 */}
      <div style={{ textAlign: "left", marginBottom: "0.5rem" }}>
        <h2 style={titleStyle}>{title}</h2>
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

      {/* 内容区域 */}
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

export default LayoutGridWidget;
