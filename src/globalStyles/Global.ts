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
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
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

  .flex {
    display: flex;
  }
  .wrap {
    flex-wrap: wrap;
  }

  .column {
    flex-direction: column;
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
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }

    .hiddenTabletUp {
      display: none;
    }
  }

  @media only screen and (min-width: ${theme.desktop}) {
    .cardWrapper {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }

  @media only screen and (min-width: ${theme.desktop_break_1}) {
    .cardWrapper {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }
`;
export default globalStyles;
