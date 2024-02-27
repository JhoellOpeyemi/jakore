import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  a {
    width: max-content;
    color: ${({ theme }) => theme.color.dark_text};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 17.5rem;
  overflow: hidden;

  img {
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
    object-position: top;
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

export const MusicDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-family: "Proxima Nova";
`;

export const Title = styled.p`
  text-transform: uppercase;
  line-height: 1.4;
  font-size: clamp(1rem, 2vw + 0.3rem, 1.5rem);
`;

export const Duration = styled.p`
  color: ${({ theme }) => theme.color.secondary};
  font-size: clamp(1rem, 2vw + 0.3rem, 1.25rem);
`;
