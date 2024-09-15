import { FC } from "react";

export type DarkBlueGradientProps = {
  id: string;
};

export const DarkBlueGradient: FC<DarkBlueGradientProps> = ({ id }) => (
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
        <stop stopColor="#1187A3" />
        <stop offset="1" stopColor="#DFEFF3" />
      </linearGradient>
    </defs>
  </svg>
);
