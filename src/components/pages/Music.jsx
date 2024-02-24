import { PageHeader, StyledDivider } from "../../styled/Utils.styled";
import MusicCard from "../MusicCard/MusicCard";

const Music = () => {
  return (
    <>
      <PageHeader>Melodies that move you</PageHeader>

      <StyledDivider margin="3rem" />

      <MusicCard />
    </>
  );
};

export default Music;
