import styled from "styled-components";

export const HeroWrapper = styled.div`
  .link {
    text-align: center;
    margin-top: 1rem;
  }

  @media (min-width: 960px) {
    margin-top: 0;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: calc(95vh - 6.6rem);
  margin: 6.6rem 0 0;
  text-align: center;

  @media (min-width: 960px) {
    position: relative;
    margin: 8.75rem 0 0;
    height: calc(90vh - 8.75rem);

    * {
      top: 0;
      bottom: 0;
    }
  }
`;

export const Artist = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.primary};
  font-size: clamp(4rem, 5vw + 1.5rem, 6rem);

  @media (min-width: 960px) {
    position: absolute;
    top: 4rem;
    height: max-content;
    z-index: 5;
  }
`;

export const Music = styled.div`
  position: relative;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondary};
  top: -7rem;
  z-index: 4;

  @media (min-width: 960px) {
    width: 45%;
    height: max-content;
    position: absolute;
    top: unset;
    bottom: 3rem;
    right: 0;
  }
`;

export const Title = styled.h2`
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  white-space: nowrap;
  transform: scaleY(3.7);
  transform-origin: top;
  font-size: clamp(1.5rem, 2vw + 0.3rem, 3rem);

  span {
    display: inline-block;
  }
`;

export const Subtitle = styled.p`
  font-family: "Proxima Nova";
  position: absolute;
  bottom: -5.5rem;
  right: 0;
  font-size: clamp(1.4rem, 2vw + 0.3rem, 2.6rem);
  padding-right: ${({ letterSpacing }) => letterSpacing / 1}px;

  @media (min-width: 960px) {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    bottom: 0;
    top: 3.75rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  top: -2.4rem;

  img {
    display: inline-block;
    width: 100%;
    height: 74vh;
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

  @media (min-width: 768px) {
    img {
      width: 70%;
    }
  }

  @media (min-width: 960px) {
    position: absolute;
    width: 48%;
    left: 50%;
    transform: translateX(-50%);

    img {
      width: 100%;
      height: 100%;
    }

    div {
      background: linear-gradient(
        180deg,
        rgba(24, 25, 26, 0) 17.58%,
        #18191a 90.25%
      );
    }
  }
`;
