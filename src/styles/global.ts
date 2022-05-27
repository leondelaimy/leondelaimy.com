import { createGlobalStyle } from 'styled-components'
import { ITheme } from '@styles'

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: 'Share Tech Mono';
    src: url('./fonts/ShareTechMono.eot'); /* IE9 Compat Modes */
    src: url('./fonts/ShareTechMono.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./fonts/ShareTechMono.svg#ShareTechMono') format('svg'), /* Legacy iOS */
         url('./fonts/ShareTechMono.woff2') format('woff2'), /* Super Modern Browsers */
         url('./fonts/ShareTechMono.woff') format('woff'), /* Pretty Modern Browsers */
         url('./fonts/ShareTechMono.ttf')  format('truetype') /* Safari, Android, iOS */
    font-style: normal;
    font-weight: 300;
    font-display: fallback;
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
`
