import { css } from "@emotion/react";
import theme from "./theme";

/** Global styles */

const globalStyles = css`
  //Mobile, Tablet styles
  .cards {
    column-gap: ${theme.spacing.xs};
    row-gap: ${theme.spacing.xs};
  }

  .cardWrapper {
    flex-direction: column;
    align-items: center;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    border: 0;
  }

  body {
    font-size: 20px;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
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

  @media only screen and (min-width: ${theme.tablet}) {
    .mainWrapper {
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .cards {
      flex-wrap: wrap;
      column-gap: ${theme.spacing.s};
      row-gap: ${theme.spacing.s};
      position: relative;
    }

    .buttonBox {
      column-gap: ${theme.spacing.s};
      justify-content: center;
    }

    .cardWrapper {
      flex-direction: row;
    }

    .hiddenTabletUp {
      display: none;
    }
  }
`;
export default globalStyles;
