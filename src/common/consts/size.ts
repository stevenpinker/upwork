import { FONT_SCALE, isSmallDevice } from "./config";

const spacingSizes = {
  xsmall:isSmallDevice ? 1:3,
  small: isSmallDevice?3: 6,
  smallMedium: isSmallDevice ? 6: 9,
  medium: isSmallDevice?6: 12,
  mediumLarge:isSmallDevice?12: 18,
  large:isSmallDevice?18: 24,
  larger:isSmallDevice?24: 32,
  xlarge:isSmallDevice?32: 48,
  xxlarge:isSmallDevice?48: 64,
  xxxlarge:isSmallDevice?64: 96,
  xxxxlarge:isSmallDevice?96: 182,
  xxxxxlarge:isSmallDevice? 182: 256,
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
  xtiny: isSmallDevice ? 8 : 10 / FONT_SCALE,
  tiny: isSmallDevice ? 10 : 12 / FONT_SCALE,
  small: isSmallDevice ? 12 : 14 / FONT_SCALE,
  smallNormal: isSmallDevice ? 13 : 15 / FONT_SCALE,
  normal: isSmallDevice ? 13 : 16 / FONT_SCALE,
  medium: isSmallDevice ? 14 : 18 / FONT_SCALE,
  mediumLarge: isSmallDevice ? 16 : 20 / FONT_SCALE,
  smLarge: isSmallDevice ? 18 : 22 / FONT_SCALE,
  large: isSmallDevice ? 20 : 24 / FONT_SCALE,
  xlarge: isSmallDevice ? 24 : 32 / FONT_SCALE,
  xlarger: isSmallDevice ? 38 : 42 / FONT_SCALE,
  xxlarge: isSmallDevice ? 44 : 48 / FONT_SCALE,
  xxxlarge: isSmallDevice ? 60 : 64 / FONT_SCALE,
};

export { spacingSizes, fontFamilies, fontSizes };
