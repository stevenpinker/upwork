import { FONT_SCALE } from "./config";

const spacingSizes = {
  xsmall: 3,
  small: 6,
  smallMedium: 9,
  medium: 12,
  mediumLarge: 18,
  large: 24,
  larger: 32,
  xlarge: 48,
  xxlarge: 64,
  xxxlarge: 96,
  xxxxlarge: 182,
  xxxxxlarge: 256,
};

const fontFamilies = {
  RBlack: "RBlack",
  RBlackItalic: "RBlackItalic",
  RB: "RB",
  RBI: "RBI",
  RI: "RI",
  RL: "RL",
  RLI: "RLI",
  RM: "RM",
  RMI: "RMI",
  RR: "RR",
  RT: "RT",
  RTI: "RTI",
};

const fontSizes = {
  xtiny: 10 / FONT_SCALE,
  tiny: 12 / FONT_SCALE,
  small: 14 / FONT_SCALE,
  smallNormal: 15 / FONT_SCALE,
  normal: 16 / FONT_SCALE,
  medium: 18 / FONT_SCALE,
  mediumLarge: 20 / FONT_SCALE,
  smLarge: 22 / FONT_SCALE,
  large: 24 / FONT_SCALE,
  xlarge: 32 / FONT_SCALE,
  xlarger: 42 / FONT_SCALE,
  xxlarge: 48 / FONT_SCALE,
  xxxlarge: 64 / FONT_SCALE,
};

export { spacingSizes, fontFamilies, fontSizes };
