import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledLink = styled(NavLink)`
  font-family: "Proxima Nova";
  text-transform: uppercase;
  text-decoration: underline;
  font-size: clamp(1rem, 2vw + 0.3rem, 1.5rem);

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
  font-size: clamp(2.5rem, 2.85vw + 1rem, 4rem);
  font-family: "Benguiat";

  @media (min-width: 768px) {
    margin-top: 9.75rem;
    padding: 0 3.5rem;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
`;
