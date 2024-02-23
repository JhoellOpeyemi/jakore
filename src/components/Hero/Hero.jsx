import {
  Artist,
  HeroContainer,
  HeroWrapper,
  ImageContainer,
  Music,
  Subtitle,
} from "./Hero.styled";

import Image from "../../assets/images/EA_cover_art.png";
import StretchText from "./StretchText";
import { StyledLink } from "../../styled/Utils.styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <Artist>Jakore</Artist>
        <ImageContainer>
          <div></div>
          <img src={`${Image}`} alt="" />
        </ImageContainer>

        <Music>
          <StretchText words={"Everything Above"} />
          <Subtitle>The ep</Subtitle>
        </Music>
      </HeroContainer>

      <div className="link">
        <StyledLink to="/music">Listen now</StyledLink>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
