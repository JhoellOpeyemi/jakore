import PropTypes from "prop-types";

import {
  CardContainer,
  Duration,
  ImageContainer,
  MusicDetails,
  Title,
} from "./MusicCard.styled";

import { StyledLink } from "../../styled/Utils.styled";

const MusicCard = ({ music }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <div></div>
        <img
          src={music.image}
          alt="Cover art for Jakore's Everything Above EP"
        />
      </ImageContainer>

      <MusicDetails>
        <Title>{music.title}</Title>
        <Duration>{music.duration}</Duration>
      </MusicDetails>

      <StyledLink to="/">Listen now</StyledLink>
    </CardContainer>
  );
};

MusicCard.propTypes = {
  music: PropTypes.array,
};

export default MusicCard;
