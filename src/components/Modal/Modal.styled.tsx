import styled from "@emotion/styled";

/** Card styles */

const ModalStyled = styled.div`
  height: 60vh;
  width: 100vw;

  .horizontalScrollComponent {
    display: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.tablet}) {
    .horizontalScrollComponent {
      display: block;
    }

    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.07),
      0px 5.7776px 8.4221px rgba(0, 0, 0, 0.0503198),
      0px 1.3363px 4.869px rgba(0, 0, 0, 0.0417275),
      0px 3.5216px 2.0172px rgba(0, 0, 0, 0.035),
      0px 1.6501px 2.32008px rgba(0, 0, 0, 0.0282725),
      0px 1.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  }
`;

export default ModalStyled;
