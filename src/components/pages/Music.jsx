import {
  CardGroup,
  PageHeader,
  StyledDivider,
} from "../../styled/Utils.styled";
import MusicCard from "../MusicCard/MusicCard";

import Image1 from "../../assets/images/Everything_Above.png";

const Music = () => {
  const data = [
    {
      title: "Everything Above",
      image: Image1,
      duration: "10:38",
    },
  ];

  return (
    <>
      <PageHeader>Melodies that move you</PageHeader>

      <StyledDivider margin="3rem" />

      <CardGroup>
        {data.map((music, index) => {
          return <MusicCard music={music} key={index} />;
        })}
      </CardGroup>
    </>
  );
};

export default Music;
