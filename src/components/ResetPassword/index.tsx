import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";
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
import MainScreen from "../../common/components/MainScreen";
import { useNavigation } from "@react-navigation/native";

export default function ResetPassword() {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Statusbar />
      <BackHeader />
      <MainScreen title="Reset Password" />
      <View style={styles.selectContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.subHeading}>
            Enter mobile number and we'll send a link to reset your Password.
          </Text>
          <Text style={styles.mobileNumberHeading}>Mobile Number</Text>
          <TextInput
            style={styles.inputContainer}
            maxLength={12}
            keyboardType="phone-pad"
            onChangeText={(text) => {
              setMobileNumber(text);
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Continue"
            onPress={() => {
              navigation.navigate("OtpCode");
            }}
            disabled={!mobileNumber}
            containerStyles={styles.button}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              If you enter a phone number, you confirm that you are authorized
              to use this phone number and agree to receive SMS text to reset to
              reset your password.
            </Text>
            <Text style={styles.descriptionTextTwo}>
              Carrier fees may apply
            </Text>
          </View>
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
    flex: 0.6,
    backgroundColor: colors.white,
    marginHorizontal: spacingSizes.large,
    marginTop: spacingSizes.mediumLarge,
    padding: spacingSizes.large,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 0.5,
  },

  buttonContainer: {
    flex: 0.5,
    justifyContent: "center",
  },
  button: {
    width: WIDTH / 1.7,
    alignSelf: "center",
  },
  textHeading: {
    fontWeight: "500",
    fontSize: fontSizes.large,
    paddingHorizontal: spacingSizes.xlarge,
  },
  subHeading: {
    fontFamily: fontFamilies.RR,
    fontSize: fontSizes.normal,
    color: colors.darkGray,
  },
  mobileNumberHeading: {
    fontFamily: fontFamilies.RB,
    fontSize: fontSizes.small,
    color: colors.gray,
    marginTop: spacingSizes.mediumLarge,
  },
  inputContainer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: spacingSizes.smallMedium,
    marginTop: spacingSizes.xsmall,
    borderColor: colors.darkGray,
    paddingHorizontal: spacingSizes.medium,
  },

  descriptionTextTwo: {
    textAlign: "left",
    fontSize: fontSizes.tiny,
    marginVertical: spacingSizes.xsmall,
    fontFamily: fontFamilies.RI,
    color: colors.gray,
  },
  descriptionContainer: {
    paddingVertical: spacingSizes.mediumLarge,
  },
  descriptionText: {
    textAlign: "left",
    fontSize: fontSizes.tiny,
    marginVertical: spacingSizes.xsmall,
    fontFamily: fontFamilies.RR,
    color: colors.gray,
  },
});
