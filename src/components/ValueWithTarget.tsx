import React from "react";

// 定义组件属性接口
export interface ValueWithTargetProps {
  // 主值
  value: string;
  // 目标值
  target: string;
  // 主值颜色
  valueColor?: string;
  // 目标值颜色
  targetColor?: string;
  // 默认主值颜色
  defaultTextColor?: string;
  // 默认目标值颜色
  defaultTargetColor?: string;
  // 文本对齐方式
  textAlign?: "left" | "center" | "right";
  // 容器样式
  containerStyle?: React.CSSProperties;
  // 主值样式
  valueStyle?: React.CSSProperties;
  // 目标值样式
  targetStyle?: React.CSSProperties;
}

// ValueWithTarget组件实现
const ValueWithTarget: React.FC<ValueWithTargetProps> = ({
  value,
  target,
  valueColor,
  targetColor,
  defaultTextColor = "#4CAF50",
  defaultTargetColor = "#4CAF50",
  textAlign = "center",
  containerStyle = {},
  valueStyle = {},
  targetStyle = {},
}) => {
  // 合并样式
  const finalContainerStyle: React.CSSProperties = { 
    textAlign,
    padding: "1px 0",
    display: "inline-block",
    cursor: "pointer",
    ...containerStyle,
  };

  const finalValueStyle: React.CSSProperties = {
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: valueColor || defaultTextColor,
    ...valueStyle,
  };

  const finalTargetStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    color: targetColor || defaultTargetColor,
    ...targetStyle,
  };

  return (
    <div style={finalContainerStyle}>
      <div style={finalValueStyle}>
        {value}
      </div>
      <div style={finalTargetStyle}>
        Target:{target}
      </div>
    </div>
  );
};

export default ValueWithTarget;
