import styled from "@emotion/styled";

/** Card styles */

const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;
  background: #d39247;
  padding: 1.5rem 1.5rem 4rem;

  &.changeBackground {
    background-color: #f3d657;
  }

  .topPhotosWrapper {
    text-align: center;
  }

  .heading {
    padding: 0 1rem;
    margin-bottom: 0.5rem;
    color: #d64161;

    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }

  .topPhotosHeading {
    padding: 0 1rem;
    color: #6b5b95;
  }

  .mobileVotingTool {
    display: block;
  }

  .modalContainer {
    display: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.tablet}) {
    .heading {
      margin-top: 3rem;

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
