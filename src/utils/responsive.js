import { css } from "styled-components";

export const smartPhone = (props) => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `;
};
