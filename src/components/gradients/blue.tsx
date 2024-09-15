import { FC } from "react";

export type BlueGradientProps = {
  id: string;
};

export const BlueGradient: FC<BlueGradientProps> = ({ id }) => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <linearGradient
        id={id}
        x1="100.5"
        y1="17.5"
        x2="-38"
        y2="70"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E6FFF" />
        <stop offset="1" stopColor="#C2D6FC" />
      </linearGradient>
    </defs>
  </svg>
);
