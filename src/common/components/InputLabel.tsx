import React from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";
import colors from "../consts/colors";
import { fontFamilies, fontSizes, spacingSizes } from "../consts/size";
type LabelProps = {
  label?: string;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
};

export default function InputLabel(props: LabelProps) {
  const { label, containerStyles, textStyles } = props;
  return (
    <View style={containerStyles}>
      <Text style={[styles.label, textStyles]}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    marginBottom: spacingSizes.small,
    fontSize: fontSizes.small,
    color: colors.darkElectricBlue,
    fontFamily: fontFamilies.RR,
  },
});
