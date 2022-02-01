import styled from "@emotion/styled";

/** Card styles */

const PhotoComponentStyled = styled.div`
  position: absolute;
  top: 20;
  left: 20;
  height: 80%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;

  .innerWrapper {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */

    .image {
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-size: cover;
      background-position: center;
      height: 80%;
      width: 90%;
      margin: auto;
      display: block;
      width: 80%;
      max-width: 700px;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.tablet}) {
  }
`;

export default PhotoComponentStyled;
