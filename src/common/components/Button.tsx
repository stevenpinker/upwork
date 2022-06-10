import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
import colors from "../consts/colors";
import { fontFamilies, fontSizes } from "../consts/size";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
type ButtonProps = {
  title?: string;
  containerStyles?: any;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  transparent?: boolean;
  textStyles?: any;
  disabled?: boolean;
  linearGradientProps?: LinearGradientProps;
};
export default function Button(props: ButtonProps) {
  const {
    title,
    containerStyles,
    onPress,
    transparent,
    textStyles,
    linearGradientProps,
    contentContainerStyle,
    disabled
  } = props;
  const gradColors = transparent
    ? [colors.transparent, colors.transparent]
    : disabled ? [colors.buttonGrad1O, colors.buttonGrad2O, colors.buttonGrad3O]
    : [colors.buttonGrad1, colors.buttonGrad2, colors.buttonGrad3];
  return (
    <TouchableOpacity
      style={[styles.mainContainer, containerStyles]}
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        colors={gradColors}
        style={[styles.container , contentContainerStyle]}
        {...linearGradientProps}
      >
        <Text
          style={[
            styles.title,
            {
              color: transparent ? colors.darkGray : colors.white,
            },
            textStyles,
          ]}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
  },
  container: {
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.normal,
    fontFamily: fontFamilies.RM
  },
});
