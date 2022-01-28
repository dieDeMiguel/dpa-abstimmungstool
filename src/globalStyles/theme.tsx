import { Theme } from "@emotion/react";

const theme: Theme = {
  colors: {
    white: "#fff",
    light_red: "#cc002b",
    dark_red: "#a70921",
    light_grey: "#eee",
    grey: "#a5a3a4",
    black: "#000000",
  },
  tablet: "768px",
  ipad_air: "820px",
  desktop: "992px",
  desktop_break_1: "1024px",
  desktop_break_2: "1295px",
  desktop_break_3: "1309px",
  fontWeight: {
    regular: "400",
    bold: "600",
    extraBold: "700",
  },
  fontSize: {
    small: "1rem",
    medium: "1.12rem",
    big: "1.25rem",
    keyword: "0.8rem",
    h2_mobile: "3rem",
    h3_mobile: "1.7rem",
  },
  spacing: {
    xs: "1rem",
    s: "2rem",
    m: "3rem",
    l: "6rem",
  },
  border: {
    grey: "1px solid #444",
  },
  transition: {
    color_hover: "color 0.2s linear",
  },
};

export default theme;
