export const VerifiedTick = ({ width = "2rem" }: { width?: string }) => {
  return (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={width}
    >
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1173_169)">
          <path
            d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C31.974 7.174 24.826 0.026 16 0ZM23.707 11.707L13.707 21.707C13.512 21.902 13.256 22 13 22C12.744 22 12.488 21.902 12.293 21.707L8.293 17.707C7.902 17.316 7.902 16.684 8.293 16.293C8.684 15.902 9.316 15.902 9.707 16.293L13 19.586L22.293 10.293C22.684 9.902 23.316 9.902 23.707 10.293C24.098 10.684 24.098 11.316 23.707 11.707Z"
            fill="#0BC77A"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_1173_169">
            <rect width="32" height="32" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};
