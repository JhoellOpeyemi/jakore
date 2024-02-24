import { createGlobalStyle } from "styled-components";
import { FontFace } from "./Fonts.styled";

const GlobalStyles = createGlobalStyle`
    ${FontFace}

    *,*::before,*::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.color.body_bg};
        color: ${({ theme }) => theme.color.text};
        font-size: 1rem;
    }

    h1,h2,h3, h4, h5 {
        font-family: 'Benguiat';
        line-height: 0.8;
    }

    p {
        line-height: 1.6;
        font-family: 'Proxima Nova';
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
