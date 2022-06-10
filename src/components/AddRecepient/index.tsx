import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { ScrollView } from "react-native-gesture-handler";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Statusbar from "../../common/components/Statusbar";
import BackHeader from "../../common/components/BackHeader";
import MainScreen from "../../common/components/MainScreen";
import Input from "../../common/components/TextInput";
import Button from "../../common/components/Button";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../common/consts/size";
import colors from "../../common/consts/colors";
import { WIDTH } from "../../common/consts/config";

export default function AddRecipient() {
  return (
    <View>
      <KeyboardAwareScrollView style={styles.keyboardScroll}>
        <Statusbar barStyle={"dark-content"} />
        <BackHeader />
        <MainScreen title="Add Recipient " />
        <ScrollView>
          <View style={styles.MainContainer}>
            <View style={styles.topInputCont}>
              <Input
                label="Account holder name "
                labelStyle={styles.labelStyle}
              />
              <Input
                label="Account holder type "
                labelStyle={styles.labelStyle}
              />
              <Input label="Account number " labelStyle={styles.labelStyle} />
              <Input label="Account type " labelStyle={styles.labelStyle} />
              <Input label="Routing number" labelStyle={styles.labelStyle} />
              <Input label="Address" labelStyle={styles.labelStyle} />
              <Input label="IBAN" labelStyle={styles.labelStyle} />
              <Input label="Swift code" labelStyle={styles.labelStyle} />
              <View style={styles.buttonContainer}>
                <Button
                  title="Cancel"
                  textStyles={styles.backTitleText}
                  transparent
                  containerStyles={styles.buttonBack}
                  contentContainerStyle={styles.buttonHeight}
                />
                <Button
                  title="Continue"
                  textStyles={styles.continueTitleText}
                  containerStyles={styles.buttonContinue}
                  contentContainerStyle={styles.buttonHeight}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  BottomTextContainer: {
    marginVertical: spacingSizes.mediumLarge,
  },
  TextBottom: {
    fontSize: fontSizes.tiny,
  },
  MainContainer: {
    backgroundColor: colors.white,
    paddingTop: spacingSizes.large,
    marginHorizontal: spacingSizes.large,
    borderRadius: 15,
    marginVertical: spacingSizes.large,
    paddingBottom: spacingSizes.large,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4.62,

    elevation: 2,
  },
  agreeButton: {
    padding: spacingSizes.large,
  },
  chekboxContainer: {
    flexDirection: "row",
    paddingVertical: spacingSizes.medium,
    marginRight: spacingSizes.xlarge,
    marginLeft: spacingSizes.smallMedium,
  },
  topInputCont: {
    paddingHorizontal: spacingSizes.large,
  },
  keyboardScroll: {
    minHeight: "100%",
  },
  inputSmall: {
    width: WIDTH / 2.8,
  },
  rowInputCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: spacingSizes.small,
    marginVertical: spacingSizes.large,
  },
  buttonBack: {
    width: WIDTH / 3,
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: spacingSizes.small,
    bottom: 0,
  },
  buttonHeight: {
    height: 40,
  },
  buttonContinue: {
    width: WIDTH / 3,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  backTitleText: {
    fontSize: fontSizes.small,
  },
  continueTitleText: {
    fontSize: fontSizes.small,
  },
  labelStyle: {
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.RR,
    color: colors.darkGray,
  },
});
