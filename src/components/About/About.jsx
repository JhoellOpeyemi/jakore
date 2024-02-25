import { StyledDivider, StyledText } from "../../styled/Utils.styled";
import {
  AboutHeader,
  AboutSection,
  HeaderContainer,
  TextGroup,
} from "./About.styled";

const About = () => {
  return (
    <>
      <StyledDivider margin="5rem" />

      <AboutSection>
        <HeaderContainer>
          <div>
            <AboutHeader>About Jakore</AboutHeader>
          </div>
          <div>
            <AboutHeader>About Jakore</AboutHeader>
          </div>
          <div>
            <AboutHeader>About Jakore</AboutHeader>
          </div>
        </HeaderContainer>

        <TextGroup>
          <StyledText>
            Jakore is a multifaceted artist whose musical prowess transcends
            genre boundaries. Hailing from the vibrant streets of Lagos,
            Nigeria, Jakore’s passion for music was ignited at an early age,
            surrounded by the diverse sounds of urban life. Influenced by the
            raw energy of hip-hop, the soulful melodies of R&B, and the
            energetic spirit of afrobeat, Jakore quickly developed a deep-seated
            love for music in all its forms.
          </StyledText>

          <StyledText>
            With a voice that resonates with both power and sensitivity, Jakore
            commands the stage with a magnetic presence that captivates
            audiences from all walks of life. Whether crooning heartfelt ballads
            or spitting rapid-fire verses, he effortlessly channels emotion and
            authenticity into every performance, leaving an indelible impression
            on those who bear witness to his artistry.
          </StyledText>
        </TextGroup>
      </AboutSection>
    </>
  );
};

export default About;
