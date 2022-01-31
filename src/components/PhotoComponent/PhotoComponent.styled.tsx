import styled from "@emotion/styled";

/** Card styles */

const PhotoComponentStyled = styled.div`
  position: absolute;
  top: 20;
  left: 20;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;

  .innerWrapper {
    height: 100%;
    width: 100%;

    .image {
      height: 100%;
      width: 100%;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.tablet}) {
  }
`;

export default PhotoComponentStyled;
