import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "@growth-ui/native";
import React from "react";
import Input from "../../common/components/TextInput";
import Statusbar from "../../common/components/Statusbar";
import MainScreen from "../../common/components/MainScreen";
import { fontSizes, spacingSizes } from "../../common/consts/size";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../common/components/Button";
import BackHeader from "../../common/components/BackHeader";
import colors from "../../common/consts/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { WIDTH } from "../../common/consts/config";

export default function ApplyGPoint() {
  return (
    <View>
      <KeyboardAwareScrollView style={styles.keyboardScroll}>
        <Statusbar />
        <BackHeader />
        <MainScreen title="Apply GPoint Prepaid Card " />
        <ScrollView>
          <View style={styles.MainContainer}>
            <View style={styles.topInputCont}>
              <Input label="Email" />
              <Input label="Legal first name" />
              <Input label="Legal first  last name" />
              <Input label="Last 4 digit of SSN" />
              <Input label="Date of birth" />
              <Input label="Address" />

              <View style={styles.rowInputCont}>
                <Input label="State" containerStyles={styles.inputSmall} />
                <Input label="Zipcode " containerStyles={styles.inputSmall} />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="Cancel"
                textStyles={styles.backTitleText}
                transparent
                containerStyles={styles.buttonBack}
                contentContainerStyle={styles.buttonHeight}
              />
              <Button
                title="Agree & continue"
                disabled
                textStyles={styles.continueTitleText}
                containerStyles={styles.buttonContinue}
                contentContainerStyle={styles.buttonHeight}
              />
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
    marginHorizontal: spacingSizes.large,
    borderRadius: 15,
    marginVertical: spacingSizes.smallMedium,
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
    marginTop: spacingSizes.large
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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacingSizes.large,
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
  },
  backTitleText: {
    fontSize: fontSizes.small,
  },
  continueTitleText: {
    fontSize: fontSizes.small,
  },
});
