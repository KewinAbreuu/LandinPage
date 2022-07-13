import { createGlobalStyle } from 'styled-components'
import Pirulen from './assets/pirulen.otf'
export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;

  }


  :root{
    --primary: #14f0ff;
  }

  @font-face {
    font-family: 'Double Porter' ;
    src: url(${Pirulen}) format('otf');
  }

`
