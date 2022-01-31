import styled from "@emotion/styled";

/** Card styles */

const DashboardStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  padding: 0;
  background: #d39247;

  &.changeBackground {
    background-color: #f3d657;
  }

  .heading {
    padding: 0 1rem;
    margin-bottom: 0.5rem;
    color: #d64161;

    h1 {
      font-size: 2rem;
    }
  }

  .topPhotosHeading {
    padding: 0 1rem;
    margin-bottom: 1rem;
    color: #6b5b95;
  }

  .mobileVotingTool {
    display: block;
  }

  .modalContainer {
    display: none;
  }

  .btn {
    margin: 3rem 2rem;
    color: white;
    font-weight: bold;
    width: 150px;
    height: 50px;
    transition: 0.2s linear;
    outline: none;
    cursor: pointer;
    font-size: 15px;
    padding: 5px;
    border: 2px solid transparent;
    background-color: rgb(161, 211, 255);
    border-radius: 5px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.tablet}) {
    .heading {
      margin-bottom: 2rem;
      h1 {
        font-size: 4rem;
      }
    }

    .modalContainer {
      display: block;
    }

    .mobileVotingTool {
      display: none;
    }
  }
`;

export default DashboardStyled;
