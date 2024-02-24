import {
  CardContainer,
  Duration,
  ImageContainer,
  MusicDetails,
  Title,
} from "./MusicCard.styled";

import EverythingAbove from "../../assets/images/Everything_Above.png";
import { StyledLink } from "../../styled/Utils.styled";

const MusicCard = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <div></div>
        <img
          src={EverythingAbove}
          alt="Cover art for Jakore's Everything Above EP"
        />
      </ImageContainer>

      <MusicDetails>
        <Title>Everything Above</Title>
        <Duration>10:38</Duration>
      </MusicDetails>

      <StyledLink to="/">Listen now</StyledLink>
    </CardContainer>
  );
};

export default MusicCard;
