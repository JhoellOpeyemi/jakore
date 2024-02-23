import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 85%;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledLink = styled(NavLink)`
  font-family: "Proxima Nova";
  text-transform: uppercase;
  text-decoration: underline;
  font-size: clamp(1rem, 2vw + 0.15rem, 1.5rem);

  &.active {
    color: ${({ theme }) => theme.color.dark_text};
  }
`;
