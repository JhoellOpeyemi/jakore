import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const ImageContainer = styled.div`
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
`;

export const Duration = styled.p`
  color: ${({ theme }) => theme.color.secondary};
`;
