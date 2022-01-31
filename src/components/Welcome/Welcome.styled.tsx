import styled from "@emotion/styled";

/** Card styles */

const WelcomeStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  background: #d39247;

  .welcomeWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .welcomeForm {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 350px;
      width: 100%;

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
