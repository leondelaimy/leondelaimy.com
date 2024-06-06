import { createGlobalStyle } from 'styled-components'
import { ITheme } from '@styles'
import ShareTechMono_woff from './fonts/ShareTechMono/ShareTechMono.woff'
import ShareTechMono_woff2 from './fonts/ShareTechMono/ShareTechMono.woff2'
import ShareTechMono_ttf from './fonts/ShareTechMono/ShareTechMono.ttf'
import ShareTechMono_eot from './fonts/ShareTechMono/ShareTechMono.eot'
import ShareTechMono_svg from './fonts/ShareTechMono/ShareTechMono.svg'
import RajdhaniMedium_woff from './fonts/Rajdhani/Rajdhani-Medium.woff'
import RajdhaniMedium_woff2 from './fonts/Rajdhani/Rajdhani-Medium.woff2'
import RajdhaniRegular_woff2 from './fonts/Rajdhani/Rajdhani-Regular.woff2'

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: 'Share Tech Mono';
    src: url('${ShareTechMono_eot}'); /* IE9 Compat Modes */
    src: url('${ShareTechMono_eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${ShareTechMono_woff2}') format('woff2'), /* Super Modern Browsers */
         url('${ShareTechMono_woff}') format('woff'), /* Pretty Modern Browsers */
         url('${ShareTechMono_ttf}')  format('truetype'), /* Safari, Android, iOS */
         url('${ShareTechMono_svg}#ShareTechMono') format('svg'); /* Legacy iOS */
    font-style: normal;
    font-weight: 300;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Rajdhani';
    src: url('${RajdhaniMedium_woff2}') format('woff2'),
      url('${RajdhaniMedium_woff}') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Rajdhani';
    src: url('${RajdhaniRegular_woff2}') format('woff2'),
      url('${RajdhaniRegular_woff2}') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  p {
    font-weight: 300;
  }

  a {
    display:block;
    width:100%;
    height:100%;
    color: ${({ theme }) => theme.colors.pastelRed};
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      color: ${({ theme }) => theme.colors.zimaBlue};
    }
  }

  button, input[type="submit"], input[type="reset"] {
    display:block;
    width:100%;
    height:100%;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  @media (max-width: 843px) {
    p {
      font-size: 0.9rem;
    }
  }
`
