import { useRef, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

import { Title } from "./Hero.styled";

const StretchText = ({ words, letterSpacing, setLetterSpacing }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [characterWidth, setCharacterWidth] = useState(0);

  const container = useRef();
  const character = useRef();

  const wordsArray = words.split("");

  const stretch = () => {
    const textWidth = characterWidth * wordsArray.length;

    const spacing = containerWidth / wordsArray.length;

    if (textWidth < containerWidth) {
      setLetterSpacing(
        spacing -
          characterWidth +
          (spacing - characterWidth) / wordsArray.length
      );
      console.log(letterSpacing);
    } else {
      console.log(letterSpacing);
    }
  };

  useLayoutEffect(() => {
    setContainerWidth(container.current.offsetWidth);
    setCharacterWidth(character.current.offsetWidth);
  }, []);

  stretch();

  return (
    <span ref={container} className="music-container">
      <Title letterSpacing={letterSpacing}>
        {wordsArray.map((text, index) => {
          return (
            <span ref={character} key={index}>
              {text == " " ? <>&nbsp;</> : text}
            </span>
          );
        })}
      </Title>
    </span>
  );
};

StretchText.propTypes = {
  words: PropTypes.string,
  letterSpacing: PropTypes.int,
  setLetterSpacing: PropTypes.func,
};

export default StretchText;
