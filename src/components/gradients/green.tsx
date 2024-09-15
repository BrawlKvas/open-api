import { FC } from "react";

export type GreenGradientProps = {
  id: string;
};

export const GreenGradient: FC<GreenGradientProps> = ({ id }) => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <linearGradient
        id={id}
        x1="100.5"
        y1="17.5"
        x2="-130.5"
        y2="88.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BAF300" />
        <stop offset="1" stopColor="#F4FFCE" />
      </linearGradient>
    </defs>
  </svg>
);
