import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TextInputProps,
} from "react-native";
import React from "react";
import InputLabel from "./InputLabel";
import Statusbar from "./Statusbar";
import colors from "../consts/colors";
import { fontFamilies, fontSizes, spacingSizes } from "../consts/size";
type InputProps = {
  label?: string;
  onChangeText?: (text: string) => void;
  containerStyles?: StyleProp<ViewStyle>;
  value?: string;
  inputStyle?: StyleProp<TextStyle>;
  inputProps?: TextInputProps;
  bottomLabel?: string;
  labelStyle?: StyleProp<TextStyle>;
};
export default function Input(props: InputProps) {
  const {
    label,
    onChangeText,
    containerStyles,
    inputStyle,
    inputProps,
    bottomLabel,
    labelStyle,
  } = props;
  return (
    <View style={[styles.container, containerStyles]}>
      <Statusbar />
      <InputLabel label={label} />
      <TextInput
        onChangeText={onChangeText}
        style={[styles.textInputBox, inputStyle]}
        {...inputProps}
      />
      {bottomLabel ? (
        <InputLabel
          label={bottomLabel}
          textStyles={[styles.bottomLabel, labelStyle]}
        />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  textInputBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.darkGray,
    height: 38,
    width: "100%",
    paddingHorizontal: spacingSizes.smallMedium,
  },
  container: {
    marginBottom: spacingSizes.smallMedium,
  },
  bottomLabel: {
    fontSize: fontSizes.tiny,
    marginTop: spacingSizes.xsmall,
    color: colors.darkGray,
  },
});
