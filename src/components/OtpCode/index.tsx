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
import { TouchableOpacity } from "react-native";
import OtpSent from "./components/OtpSentModal";
import { useNavigation } from "@react-navigation/native";

export default function OtpCode() {
  const navigation = useNavigation<any>();
  const [showOtpModal, setShowOtpModal] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <Statusbar />
      <BackHeader />
      <Text style={styles.textHeading}>Please enter your code</Text>
      <View style={styles.selectContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.subHeading}>
            Your code was sent to ***-***_1234 by text message. The code expires
            shortly, so please enter it soon.
          </Text>
          <View style={styles.otpContainer}>
            <TextInput
              style={styles.inputContainer}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputContainer}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputContainer}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputContainer}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputContainer}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputContainer}
              maxLength={1}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Continue"
            onPress={() => {
              navigation.navigate("CreateNewPassword");
            }}
            containerStyles={styles.button}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Didn't receive your code?
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.descriptionText,
                  styles.sendColor,
                  {
                    marginLeft: 4,
                  },
                ]}
              >
                Send again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <OtpSent visible={showOtpModal} setModalVisible={setShowOtpModal} />
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
  },
  button: {
    width: WIDTH / 1.7,
    alignSelf: "center",
    marginVertical: spacingSizes.medium,
  },
  textHeading: {
    fontSize: fontSizes.large,
    paddingHorizontal: spacingSizes.xlarge,
    fontFamily: fontFamilies.RM,
  },
  subHeading: {
    fontWeight: "400",
    fontSize: fontSizes.small,
    color: colors.darkGray,
    fontFamily: fontFamilies.RR,
  },
  mobileNumberHeading: {
    fontWeight: "700",
    fontSize: fontSizes.small,
    color: colors.gray,
    marginTop: spacingSizes.small,
  },
  inputContainer: {
    paddingVertical: spacingSizes.medium,
    paddingHorizontal: spacingSizes.smallMedium,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: spacingSizes.smallMedium,
    borderColor: colors.darkGray,
    marginHorizontal: spacingSizes.xsmall,
  },

  descriptionText: {
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.RR,
  },
  descriptionContainer: {
    flexDirection: "row",
    marginTop: spacingSizes.xlarge,
  },
  otpContainer: {
    flexDirection: "row",
    alignSelf: "center",
    paddingVertical: spacingSizes.larger,
  },
  sendColor: {
    color: colors.primaryBlue,
  },
});
