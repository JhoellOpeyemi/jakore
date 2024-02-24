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

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.dark_text};
  margin-top: ${({ margin }) => margin};
  margin-bottom: ${({ margin }) => margin};
`;

export const StyledText = styled.p`
  font-family: "Proxima Nova";
  font-size: clamp(1rem, 2vw + 0.25rem, 1.25rem);
  color: ${({ theme }) => theme.color.text};
  margin-bottom: 1.5rem;
`;

export const PageHeader = styled.h2`
  margin-top: 6.75rem;
  color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  text-align: center;
  font-size: 3rem;
  font-family: "Benguiat";
`;
