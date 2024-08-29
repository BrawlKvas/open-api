import { FC } from "react";

export type LogoIconProps = {
  className?: string;
};

export const LogoIcon: FC<LogoIconProps> = ({ className }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect y="6" width="5.25" height="24" fill="white" />
    <rect x="18.75" y="6" width="5.25" height="24" fill="white" />
    <rect
      y="11.25"
      width="5.25"
      height="24"
      transform="rotate(-90 0 11.25)"
      fill="white"
    />
    <rect x="24" width="6" height="6" fill="#5E8716" />
  </svg>
);
