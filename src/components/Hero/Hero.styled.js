import styled from "styled-components";

export const HeroWrapper = styled.div`
  .link {
    text-align: center;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 94vh;
  padding: 6.6rem 0 0;
  text-align: center;
`;

export const Artist = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.primary};
  font-size: 4rem;
`;

export const Music = styled.div`
  position: relative;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondary};
  top: -7rem;
  z-index: 4;
`;

export const Title = styled.h2`
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  white-space: nowrap;
  transform: scaleY(3.6);
  transform-origin: top;

  span {
    display: inline-block;
  }
`;

export const Subtitle = styled.p`
  font-family: "Proxima Nova";
  position: absolute;
  bottom: -5rem;
  right: 0;
  font-size: 1.4rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  top: -2.25rem;

  img {
    display: inline-block;
    width: 80%;
    height: 75vh;
    object-fit: cover;
    object-position: top;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(24, 25, 26, 0) 17.58%,
      #18191a 80.25%
    );
  }
`;
