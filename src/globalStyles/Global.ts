import { css } from "@emotion/react";
import theme from "./theme";

/** Global styles */

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 20px;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  hr {
    height: 1px;
    margin: 0 auto;
    background-color: ${theme.colors.grey};
    width: 100%;
  }
  ul {
    padding: 0;
  }
  h2,
  h3 {
    margin: 0;
  }
  .py-2 {
    padding: ${theme.spacing.s} 0;
  }
  .py-6 {
    padding: ${theme.spacing.l} 0;
  }
  .py-3 {
    padding: ${theme.spacing.m} 0;
  }
  .pt-3 {
    padding-top: ${theme.spacing.m};
  }
  .pt-6 {
    padding-top: ${theme.spacing.l};
  }
  .pb-6 {
    padding-bottom: ${theme.spacing.l};
  }
  .pb-3 {
    padding-bottom: ${theme.spacing.m};
  }
  .my-2 {
    margin: ${theme.spacing.s} 0;
  }
  .my-3 {
    margin: ${theme.spacing.m} 0;
  }
  .mt-2 {
    margin-top: ${theme.spacing.s};
  }
  .mb-2 {
    margin-bottom: ${theme.spacing.s};
  }
  .mb-3 {
    margin-bottom: ${theme.spacing.m};
  }
  .mb-6 {
    margin-bottom: ${theme.spacing.l};
  }
  .mt-6 {
    margin-top: ${theme.spacing.l};
  }
  .cards {
    flex-wrap: wrap;
    column-gap: ${theme.spacing.s};
    row-gap: ${theme.spacing.s};
    position: relative;
  }
  .nextButton,
  .prevButton {
    font-size: ${theme.fontSize.big};
    font-weight: ${theme.fontWeight.bold};
    text-transform: lowercase;
  }
  .nextButton {
    background-color: ${theme.colors.light_red};
    color: ${theme.colors.white};
    padding: 1rem ${theme.spacing.m};

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.light_red};
      outline: ${theme.border.grey};
      transition: ${theme.transition.color_hover};
    }
    &:disabled {
      opacity: 60%;
      pointer-events: none;
    }
  }
  .footer {
    margin: 0;
  }

  h2.header-font {
    font-size: 4rem;
    line-height: 5.5rem;
    padding: 0;
    margin: 0;
    color: ${theme.colors.light_red};
    text-align: center;

    &:hover {
      color: ${theme.colors.dark_red};
      transition: ${theme.transition.color_hover};
    }
  }
  h3.header-font {
    font-size: 2rem;
    line-height: 3.5rem;
    padding: 0;
    margin: 0 0 ${theme.spacing.l} 0;
    text-align: center;

    &:hover {
      color: ${theme.colors.dark_red};
      transition: ${theme.transition.color_hover};
    }
  }
  .buttonBox {
    column-gap: ${theme.spacing.s};
    justify-content: flex-end;
  }

  .flex {
    display: flex;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .justify-content-space-between {
    justify-content: space-between;
  }
  .justify-content-space-around {
    justify-content: space-around;
  }
  .justify-content-center {
    justify-content: center;
  }
  .justify-flex-end {
    justify-content: flex-end;
  }
  .align-items-center {
    align-items: center;
  }
  .color-red {
    color: ${theme.colors.light_red};
  }
  //Mobile, Tablet styles

  @media only screen and (max-width: ${theme.tablet}) {
    .cards {
      column-gap: ${theme.spacing.xs};
      row-gap: ${theme.spacing.xs};
    }

    h2,
    h2.header-font {
      font-size: ${theme.fontSize.h2_mobile};
    }
    h3,
    h3.header-font {
      font-size: ${theme.fontSize.h3_mobile};
      line-height: 3rem;
    }
    h2.header-font {
      margin: 0;
    }
    h3.header-font {
      margin: ${theme.spacing.xs} 0 ${theme.spacing.m} 0;
      line-height: 3rem;
    }

    .buttonBox {
      justify-content: center;
    }
  }
`;
export default globalStyles;
