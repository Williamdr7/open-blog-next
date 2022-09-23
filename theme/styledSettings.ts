import { createGlobalStyle, css } from "styled-components";

export const fontSettings = css`
  font-family: "Inter";
  font-style: normal;
`;

export const mediasQueries = {
  up: (breakpoint: string, vertical = false) =>
    `@media (min-${
      vertical ? "height" : "width"
    }: calc(${breakpoint} + 0.02px))`,
  down: (breakpoint: string, vertical = false) =>
    `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`,
  between: (breakpointMin: string, breakpointMax: string, vertical = false) =>
    `@media (max-${vertical ? "height" : "width"}: ${breakpointMax}) and (min-${
      vertical ? "height" : "width"
    }: calc(${breakpointMin} + 0.02px))`,
};

const breakpoints = {
  xs: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1600px",
};

const textSizes = {
  labelLarge: "18px",
  labelMedium: "16px",
  labelSmall: "14px",
  labelExtraSmall: "12px",
  bodyLarge: "18px",
  bodyMedium: "16px",
  bodySmall: "14px",
  bodyExtraSmall: "12px",
};

export const colors = {
  primary: "#6246ea",
  secondary: "#22A2BD",
};

export const backgroundColors = {
  primary: "#D2D6DB",
  secondary: "#eff0f3",
};

export const textColors = {
  primary: "#fff",
  secondary: "#eff0f3",
};

export const GlobalStyle = createGlobalStyle`
* {
  ${fontSettings}
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #D2D6DB;
}
* {
  scrollbar-width: thin;
  scrollbar-color: #76ED44 #000;
}
*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  background: #D2D6DB;
}
*::-webkit-scrollbar-thumb {
  background-color: #76ED44;
  border-radius: 10px;
  border: 3px solid #D2D6DB;
}
`;

export const theme = {
  ...mediasQueries,
  colors,
  textSizes,
  breakpoints,
  backgroundColors,
  textColors,
};
