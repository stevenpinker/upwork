import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Statusbar from "../../common/components/Statusbar";
import colors from "../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../common/consts/size";
import Button from "../../common/components/Button";
import { WIDTH } from "../../common/consts/config";
import BackHeader from "../../common/components/BackHeader";

export default function ChangeMobileNumber() {
  return (
    <View style={styles.container}>
      <Statusbar />
      <BackHeader />
      <View style={styles.selectContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.textHeading}>Change mobile number</Text>
          <Text style={styles.subHeading}>Enter mobile number</Text>
          <TextInput
            style={styles.inputContainer}
            maxLength={12}
            keyboardType="numeric"
            placeholder="enter mobile number"
          />
          <Text style={styles.msgText}>
            We will send you confirmation code.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Next" disabled containerStyles={styles.button} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  headingText: {
    textAlign: "center",
    marginTop: spacingSizes.xlarge,
    fontSize: fontSizes.large,
  },
  selectContainer: {
    flex: 0.9,
    backgroundColor: colors.white,
    marginHorizontal: spacingSizes.large,
    marginTop: spacingSizes.mediumLarge,
    padding: spacingSizes.large,
  },
  contentContainer: {
    flex: 0.5,
  },

  buttonContainer: {
    flex: 0.5,
    alignItems: "center",
  },
  button: {
    width: WIDTH / 1.8,
  },
  textHeading: {
    fontFamily: fontFamilies.RB,
    fontSize: fontSizes.mediumLarge,
    marginBottom: spacingSizes.large,
  },
  subHeading: {
    fontFamily: fontFamilies.RR,
    fontSize: fontSizes.normal,
    color: colors.darkGray,
  },
  inputContainer: {
    padding: spacingSizes.small,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: spacingSizes.smallMedium,
    borderColor: colors.darkGray,
  },
  msgText: {
    fontFamily: fontFamilies.RR,
    fontSize: fontSizes.small,
    color: colors.darkGray,
  },
});
