import useDocumentTitle from "../../useDocumentTitle";

import {
  CardGroup,
  PageHeader,
  StyledDivider,
} from "../../styled/Utils.styled";
import VideoCard from "../VideoCard/VideoCard";

import thumbnail1 from "../../assets/images/unsplash_CD6pT9Uzx1Y-1.png";
import thumbnail2 from "../../assets/images/unsplash_CD6pT9Uzx1Y.png";

const Videos = () => {
  useDocumentTitle("Videos");

  const data = [
    {
      title: "Cest la vie (Official Video)",
      thumbnail: thumbnail2,
    },
    {
      title: "Live performance for glitch africa",
      thumbnail: thumbnail1,
    },
  ];

  return (
    <>
      <PageHeader>A window to spectacular adventures</PageHeader>

      <StyledDivider margin="3rem" />

      <CardGroup>
        {data.map((video, index) => {
          return <VideoCard key={index} video={video} />;
        })}
      </CardGroup>
    </>
  );
};

export default Videos;
