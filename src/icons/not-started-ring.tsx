import React from "react";

export const NotStartedRing = ({ width = "2rem" }: { width?: string }) => {
  return (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-btxj3e"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={width}
    >
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1173_77)">
          <path
            d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
            stroke="#3EC7E3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="16" cy="16" r="6" fill="#3EC7E3"></circle>
        </g>
        <defs>
          <clipPath id="clip0_1173_77">
            <rect width="32" height="32" rx="16" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};
