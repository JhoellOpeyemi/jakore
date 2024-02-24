import ProximaNova2 from "../assets/fonts/proxima_nova_font-webfont.woff2";
import ProximaNova from "../assets/fonts/proxima_nova_font-webfont.woff";
import Benguiat2 from "../assets/fonts/benguiat-webfont.woff2";
import Benguiat from "../assets/fonts/benguiat-webfont.woff";
import BenguiatNormal2 from "../assets/fonts/benguiat_normal-webfont.woff2";
import BenguiatNormal from "../assets/fonts/benguiat_normal-webfont.woff";

export const FontFace = `
    @font-face {
        font-family: 'Proxima Nova';
        src: url(${ProximaNova2}) format('woff2'),
        url(${ProximaNova}) format('woff')
    }

    @font-face {
        font-family: 'Benguiat';
        src: url(${Benguiat2}) format('woff2'),
        url(${Benguiat}) format('woff')
    }

    @font-face {
        font-family: 'Benguiat Normal';
        src: url(${BenguiatNormal2}) format('woff2'),
        url(${BenguiatNormal}) format('woff')
    }
`;
