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

  .welcomeWrapper {
    width: 100%;
    height: 100%;
    display: flex;w
    justify-content: center;
    align-items: center;

    .welcomeForm {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 350px;

      h1 {
        color: #e3eaa7;
      }

      h2 {
        text-align: center;
      }

      p {
        color: #3e4444;
        font-weight: bold;
      }

      input[type="text"] {
        font-family: "Roboto", sans-serif;
        color: #333;
        font-size: 1.2rem;
        margin: 0 auto;
        padding: 1.5rem 2rem;
        border-radius: 0.2rem;
        background-color: rgb(255, 255, 255);
        border: none;
        width: 90%;
        display: block;
        border-bottom: 0.3rem solid transparent;
        transition: all 0.3s;
        width: 250px;
        height: 20px;
      }
    }
  }
`;

export default WelcomeStyled;
