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
export default function BusinusAccount() {
  return (
    <View>
      <KeyboardAwareScrollView style={styles.keyboardScroll}>
        <Statusbar />
        <BackHeader />
        <MainScreen title="Tell us about your business " />
        <ScrollView>
          <View style={styles.MainContainer}>
            <View style={styles.topInputCont}>
              <Input label="Business phone number(optional)" />
              <Input label="Email" />
              <Input label="Business owner first name" />
              <Input label="Business owner last name" />
              <Input label="Business user name" />
              <Input label="Business address" />
              <View style={styles.rowInputCont}>
                <Input label="City" containerStyles={styles.inputSmall} />
                <Input label="State" containerStyles={styles.inputSmall} />
              </View>
              <View style={styles.rowInputCont}>
                <Input label="Zip code" containerStyles={styles.inputSmall} />
                <Input label="Country" containerStyles={styles.inputSmall} />
              </View>
              <Input label="Partner Company ID (optional)" />
              <Input label="Last Name" />
              <Input label="Business Category" />
              <Input label="Promoter's username(optional)" />
            </View>
            <View style={styles.chekboxContainer}>
              <CheckBox filled checked />
              <Text style={styles.TextBottom}>
                I agree to the Consent to Receive Electronic Disclosures and
                understand that we’ll send account notices to the email address
                you provided, and also you have read and agree to the User
                Agreement, Privacy Statement. checking this box, you have read
                and agree to Wallet’s User
                <Text style={styles.termsText}> Term of Service</Text> and
                <Text style={styles.termsText}> Privacy Policy</Text>, as well as our partner Dwolla’s
                <Text style={styles.termsText}> Term of Service</Text> and
                <Text style={styles.termsText}> Privacy Policy</Text>.
              </Text>
            </View>
            <Button
              title="Agree &  Signup"
              containerStyles={styles.agreeButton}
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
    color: colors.gray,
  },
  MainContainer: {
    backgroundColor: colors.white,
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
    marginTop: spacingSizes.large,
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
  termsText: {
    color: colors.termsBlue,
  },
});
