import React from "react";
import { StrokePanel, Typography } from "../typography/typography";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ value, onChange }) => {
  const handleClick = () => {
    const newValue = value === "ru" ? "en" : "ru";
    onChange(newValue);
  };

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          width: 97,
          height: 44,
          border: "1px solid #154E65",
          borderRadius: 40,
          backgroundColor: "white",
          padding: "5px 20px",
          fontSize: "16px",
          color: "#154E65",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Typography
          fontSize={20}
          color={"#154E65"}
          text={value === "ru" ? "ru" : "en"}
          strokePanel={StrokePanel.Regular}
        />
      </button>
    </div>
  );
};
