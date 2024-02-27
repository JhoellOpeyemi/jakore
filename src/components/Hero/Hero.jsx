import { useState } from "react";

import {
  Artist,
  HeroContainer,
  HeroWrapper,
  ImageContainer,
  Music,
  Subtitle,
} from "./Hero.styled";

import Image from "../../assets/images/Jk_nobg.png";
import StretchText from "./StretchText";
import { StyledLink } from "../../styled/Utils.styled";

const Hero = () => {
  const [letterSpacing, setLetterSpacing] = useState(0);

  return (
    <HeroWrapper>
      <HeroContainer>
        <Artist>Jakore</Artist>
        <ImageContainer>
          <div></div>
          <img src={`${Image}`} alt="" />
        </ImageContainer>

        <Music>
          <StretchText
            letterSpacing={letterSpacing}
            setLetterSpacing={setLetterSpacing}
            words={"Everything Above"}
          />
          <Subtitle letterSpacing={letterSpacing}>The ep</Subtitle>
        </Music>
      </HeroContainer>

      <div className="link">
        <StyledLink to="/music">Listen now</StyledLink>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
