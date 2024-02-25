import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a {
    color: ${({ theme }) => theme.color.dark_text};
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  height: 17.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 10%0;
    object-fit: cover;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(24, 25, 26, 0.2);
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  line-height: 1.3;
  font-size: clamp(1rem, 2vw + 0.3rem, 1.5rem);
`;
