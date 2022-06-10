import { View, Text, StyleSheet, Image } from "react-native";
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

export default function AddGPointPrepaid() {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={styles.keyboardScroll}>
        <Statusbar />
        <BackHeader />
        <MainScreen title="Add GPoint Prepaid Card" />
        <ScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.topInputCont}>
              <Input label="Cardholder's name" labelStyle={styles.labelStyle} />
              <Input label="Card number " labelStyle={styles.labelStyle} />
              <Input
                label="Expiration date "
                labelStyle={styles.labelStyle}
                inputProps={{ placeholder: "MM/DD/YYYY" }}
              />
              <Input label="CVV " labelStyle={styles.labelStyle} />
              <Input label="ZIP/Postal code  " labelStyle={styles.labelStyle} />
              <Image
                resizeMode="contain"
                style={styles.pngContain}
                source={require("../../assets/img/ellipsefill.png")}
              />
              <View style={styles.buttonContainer}>
                <Button
                  title="Cancel"
                  textStyles={styles.backTitleText}
                  transparent
                  containerStyles={styles.buttonBack}
                  contentContainerStyle={styles.buttonHeight}
                />
                <Button
                  title="Save"
                  disabled
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
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: spacingSizes.large,
    borderRadius: 15,
    marginVertical: spacingSizes.smallMedium,
    paddingBottom: spacingSizes.large,
    justifyContent: "space-between",

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
    // flex: 1,
    paddingHorizontal: spacingSizes.small,
    marginTop: spacingSizes.large,
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
  container: {
    flex: 1,
  },
  pngContain: {
    position: "absolute",
    right: 0,
    zIndex: 999,
    bottom: 0,
    height: 233,
    width: 233,
  },
});
