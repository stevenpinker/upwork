import { Dimensions } from "react-native";

const {
  width: WIDTH,
  height: HEIGHT,
  fontScale: FONT_SCALE,
} = Dimensions.get("window");

const isSmallDevice = HEIGHT < 700 ? true : false;

export { WIDTH, HEIGHT, FONT_SCALE, isSmallDevice };
