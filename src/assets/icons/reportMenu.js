import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function ReportMenu({
  circleColor = "#88C097",
  pathColor = "#C74C73",
}) {
  return (
    <Svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="18" cy="18" r="18" fill={circleColor} />
      <Path
        d="M25.0588 18.975V13.56C25.0588 11.9639 25.0588 11.1658 24.7511 10.5561C24.4804 10.0199 24.0484 9.58387 23.5171 9.31063C22.9132 9 22.1225 9 20.5412 9H14.5176C12.9363 9 12.1457 9 11.5417 9.31063C11.0104 9.58387 10.5784 10.0199 10.3077 10.5561C10 11.1658 10 11.9639 10 13.56V23.44C10 25.0361 10 25.8342 10.3077 26.4439C10.5784 26.9801 11.0104 27.4161 11.5417 27.6894C12.1457 28 12.9363 28 14.5176 28H17.5294M19.4118 17.55H13.7647M15.6471 21.35H13.7647M21.2941 13.75H13.7647M19.8824 25.15L21.7647 27.05L26 22.775"
        stroke={pathColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}