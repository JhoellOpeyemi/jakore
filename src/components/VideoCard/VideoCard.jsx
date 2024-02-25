import PropTypes from "prop-types";

import { StyledLink } from "../../styled/Utils.styled";
import { CardContainer, Title, VideoContainer } from "./VideoCard.styled";

const VideoCard = ({ video }) => {
  return (
    <>
      <CardContainer>
        <VideoContainer>
          <div></div>
          <img src={video.thumbnail} alt="" />
        </VideoContainer>

        <Title>{video.title}</Title>

        <StyledLink to="/">Watch now</StyledLink>
      </CardContainer>
    </>
  );
};

VideoCard.propTypes = {
  video: PropTypes.array,
};

export default VideoCard;
