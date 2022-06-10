import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "@growth-ui/native";
import React from "react";
import Input from "../../common/components/TextInput";
import Statusbar from "../../common/components/Statusbar";
import MainScreen from "../../common/components/MainScreen";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../common/consts/size";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../common/components/Button";
import BackHeader from "../../common/components/BackHeader";
import colors from "../../common/consts/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
export default function CreatePersonalAccount() {
  const navigation = useNavigation<any>();
  return (
    <View>
      <KeyboardAwareScrollView style={styles.keyboardScroll}>
        <Statusbar />
        <BackHeader />
        <MainScreen title="Create a new account " />
        <ScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.topInputCont}>
              <Input label="Last Name" />
              <Input label="First Name" />
              <Input label="Email" />
              <Input label="UserName" />
              <Input label="Password" />
              <Input label="Partner Company(optional)" />
              <Input label="Partner Company ID (optional)" />
              <Input label="Last Name" />
              <Input label="First Name" />
              <Input label="Email" />
              <Input label="UserName" />
              <Input label="Password" />
              <Input label="Partner Company(optional)" />
              <Input label="Partner Company ID (optional)" />
            </View>
            <View style={styles.chekboxContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox filled checked />
              </View>
              <Text style={styles.TextBottom}>
                By checking this box, you have read and agree to Wallet’s User
                <Text style={styles.termsText}> Term of Service</Text> and{" "}
                <Text style={styles.termsText}> Privacy Policy</Text>, as well
                as our partner Dwolla’s{" "}
                <Text style={styles.termsText}> Term of Service</Text> and{" "}
                <Text style={styles.termsText}> Privacy Policy</Text>.
              </Text>
            </View>
            <View style={styles.chekboxContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox filled checked />
              </View>
              <Text style={styles.TextBottom}>
                By checking this box, you agree to the{" "}
                <Text style={styles.termsText}>
                  {" "}
                  Consent to Receive Electronic
                </Text>{" "}
                Disclosures and understand that we’ll send account notices to
                the email address you provided.
              </Text>
            </View>
            <Button
              title="Agree &  Signup"
              containerStyles={styles.agreeButton}
              onPress={() => {
                navigation.navigate("PersonalAccount");
              }}
            />
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
    fontFamily: fontFamilies.RR,
    color: colors.gray,
  },
  mainContainer: {
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
    marginTop: spacingSizes.smallMedium,
  },
  keyboardScroll: {
    minHeight: "100%",
  },
  checkboxContainer: {
    transform: [
      {
        scale: 0.8,
      },
    ],
    marginTop: -spacingSizes.small,
  },
  termsText: {
    color: colors.termsBlue,
  },
});
