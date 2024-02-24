import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterSection = styled.footer``;

export const SocialsGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 31.25rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const Socials = styled(Link)`
  svg {
    width: clamp(1.5rem, 2vw + 0.3rem, 2rem);
    height: clamp(1.5rem, 2vw + 0.3rem, 2rem);
  }
`;

export const Copyright = styled.div`
  margin: 4.5rem 0 2rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.dark_text};
`;
