import styled from "@emotion/styled";

/** Card styles */

const WelcomeStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  background: #d39247;

  .btn {
    margin: 2rem;
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

  .modalWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme.tablet}) {
  }
`;

export default WelcomeStyled;
