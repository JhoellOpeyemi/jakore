import styled from "styled-components";

export const AboutSection = styled.section``;

export const HeaderContainer = styled.div`
  margin-bottom: 4rem;
  max-width: 1200px;
  overflow: hidden;
  white-space: nowrap;

  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 10%,
    white 90%,
    transparent
  );

  mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);

  div {
    display: inline-block;
    animation: scroll 18s linear infinite;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const AboutHeader = styled.h2`
  font-family: "Benguiat";
  font-size: clamp(3rem, 3vw + 1.5rem, 4.25rem);
  white-space: nowrap;
  text-transform: uppercase;
  margin: 0 5.75rem;
`;

export const TextGroup = styled.div`
  max-width: 53rem;
`;
