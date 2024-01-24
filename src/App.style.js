import { createGlobalStyle } from "styled-components";
import NunitoBlack from "./fonts/Nunito-Black.ttf";
import NunitoBold from "./fonts/Nunito-Bold.ttf";
import NunitoRegular from "./fonts/Nunito-Regular.ttf";
import NunitoLight from "./fonts/Nunito-Light.ttf";
import NunitoSemiBold from "./fonts/Nunito-SemiBold.ttf";
import NunitoMedium from "./fonts/Nunito-Medium.ttf";
import QuicksandBold from "./fonts/Quicksand-Bold.ttf";
export const GlobalStyles = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
}
  @font-face {
    font-family: 'Nunito-Black';
    src: url(${NunitoBlack}) format('truetype');
  }
  @font-face {
    font-family: 'Nunito-Bold';
    src: url(${NunitoBold}) format('truetype');
  }
  @font-face {
    font-family: 'Nunito-Regular';
    src: url(${NunitoRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Nunito-Light';
    src: url(${NunitoLight}) format('truetype');
  }
  @font-face {
    font-family: 'Nunito-SemiBold';
    src: url(${NunitoSemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'Nunito-Medium';
    src: url(${NunitoMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Quicksand-Bold';
    src: url(${QuicksandBold}) format('truetype');
  }
`;