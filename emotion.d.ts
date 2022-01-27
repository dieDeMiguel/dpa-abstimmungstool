import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends Record<string, any> {
    colors: {
      white: string;
      light_red: string;
      dark_red: string;
      light_grey: string;
      grey: string;
      black: string;
    };
    tablet: string;
    ipad_air: string;
    desktop: string;
    desktop_break_1: string;
    desktop_break_2: string;
    desktop_break_3: string;
    fontWeight: {
      regular: string;
      bold: string;
      extraBold: string;
    };
    fontSize: {
      keyword: string;
      small: string;
      medium: string;
      big: string;
      h2_mobile: string;
      h3_mobile: string;
    };
    spacing: {
      xs: string;
      s: string;
      m: string;
      l: string;
    };
    border: {
      grey: string;
    };
    transition: {
      color_hover: string;
    };
  }
}
