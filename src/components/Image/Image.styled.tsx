import styled from "@emotion/styled";

/** Card styles */

const CardStyled = styled.div`
  padding: 1rem;
  .check-card {
    width: 100%;
    margin: 1rem;

    .check-card-item {
      padding: 2rem;
      border-radius: 5px;
      padding: 1rem;
      overflow: hidden;
      height: 320px;
      width: 200px;
      background: ${({ theme }) => theme.colors.white};

      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.07),
        0px 5.7776px 8.4221px rgba(0, 0, 0, 0.0503198),
        0px 1.3363px 4.869px rgba(0, 0, 0, 0.0417275),
        0px 3.5216px 2.0172px rgba(0, 0, 0, 0.035),
        0px 1.6501px 2.32008px rgba(0, 0, 0, 0.0282725),
        0px 1.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    }

    .topImageWrapper {
      cursor: pointer;
      height: 18rem;
      display: flex;
      flex-direction: column;
      align-content: space-between;
      row-gap: 1.5rem;
    }

    .check-card-body {
      height: 66%;
      z-index: 2;
      position: relative;
      background: ${({ theme }) => theme.colors.white};
    }

    .check-card-title {
      font-size: ${({ theme }) => theme.fontSize.medium};
      text-align: center;
    }

    .check-card-check-icon {
      padding: 0.8rem 0 0.5rem;
      text-align: center;
      position: absolute;
      bottom: -15rem;
      margin: 0 7%;
      width: 86%;
      -webkit-transition: all 0.3s cubic-bezier(0.5, -0.8, 0.5, 1.8);
      transition: all 0.3s cubic-bezier(0.5, -0.8, 0.5, 1.8);
    }

    input[type="checkbox"],
    input[type="radio"] {
      display: none;
    }
    input[type="checkbox"]:checked ~ .check-card-body .check-card-check-icon,
    input[type="radio"]:checked ~ .check-card-body .check-card-check-icon {
      bottom: 15%;
    }
    input[type="checkbox"]:checked ~ .check-card-body,
    input[type="radio"]:checked ~ .check-card-body {
      color: ${({ theme }) => theme.colors.white};
    }
    input[type="checkbox"]:checked ~ .check-card-body .card-icon,
    input[type="radio"]:checked ~ .check-card-body .card-icon {
      opacity: 10%;
    }

    .check-card-check-icon {
      padding: 0;
      margin: 0;
    }
    .check-card-title {
      line-height: 1.5rem;
    }

    .check-card div label,
    .check-card div .topImageWrapper {
      height: 12rem;
    }
    .card-icon img {
      width: 100%;
      height: 100%;
    }

    .check-card-check-icon img {
      width: 43px;
      height: 43px;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    align-items: center;

    .check-card-item {
      &:hover {
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        transform: scale(1.2);
        z-index: 10;
        -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
      }
    }
  }
`;

export default CardStyled;
