import React from "react";

export default function MenuButton({
  open,
  color,
  onClick,
}: {
  open: boolean;
  color: string;
  onClick: () => void;
}) {
  const styles = {
    line: {
      height: "2px",
      width: "25px",
      background: color,
      transition: "all 0.2s ease",
    },
    lineTop: {
      transform: open ? "translateX(-1px) rotate(45deg)" : "none",
      transformOrigin: "top left",
      marginBottom: "7px",
    },
    lineMiddle: {
      opacity: open ? 0 : 1,
      transform: open ? "translateX(-16px)" : "none",
    },
    lineBottom: {
      transform: open ? "translateX(-2px) rotate(-45deg)" : "none",
      transformOrigin: "top left",
      marginTop: "7px",
    },
  };

  return (
    <div className="menu-icon" onClick={onClick}>
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  );
}
