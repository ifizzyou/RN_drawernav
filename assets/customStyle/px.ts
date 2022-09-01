import {} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,

} from "react-native-responsive-dimensions";

const FIGMA_WINDOW_WIDTH = 360;
const FIGMA_WINDOW_HEIGHT = 760;

export const px = (width: number): number => {
  const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;
  return responsiveScreenWidth(percentage);
};

export const hpx = (height: number): number => {
  const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;
  return responsiveScreenHeight(percentage);
};

export const fpx = (fontSize: number): number => {
  const percentage = fontSize * 0.135;
  return responsiveScreenFontSize(percentage);
};
