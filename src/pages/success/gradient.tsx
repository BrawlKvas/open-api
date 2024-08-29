export const GRADIENT_ID = "xGradient";

export const SuperEllipseShapeGradient = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <linearGradient
        id={GRADIENT_ID}
        x1="100.5"
        y1="17.5"
        x2="-130.5"
        y2="88.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#BAF300" />
        <stop offset="1" stop-color="#F4FFCE" />
      </linearGradient>
    </defs>
  </svg>
);
