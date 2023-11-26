import React from "react";

export const Lock = ({ width = "2rem" }: { width?: string }) => {
  return (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 16 22"
      width={width}
    >
      <svg
        width="16"
        height="22"
        viewBox="0 0 16 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8.00002H13V6.21002C13 3.60002 11.09 1.27002 8.49 1.02002C5.51 0.740018 3 3.08002 3 6.00002V8.00002H0V22H16V8.00002ZM8 17C6.9 17 6 16.1 6 15C6 13.9 6.9 13 8 13C9.1 13 10 13.9 10 15C10 16.1 9.1 17 8 17ZM5 8.00002V6.00002C5 4.34002 6.34 3.00002 8 3.00002C9.66 3.00002 11 4.34002 11 6.00002V8.00002H5Z"
          fill="white"
        ></path>
      </svg>
    </svg>
  );
};
