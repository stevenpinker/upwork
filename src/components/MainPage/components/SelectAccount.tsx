import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "@growth-ui/native";
import Statusbar from "../../../common/components/Statusbar";
import colors from "../../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../../common/consts/size";
import { WIDTH } from "../../../common/consts/config";
import Button from "../../../common/components/Button";
import { useNavigation } from "@react-navigation/native";
export default function SelectAccount() {
  const [isPersonalAccount, setIsPersonalAccount] = useState<boolean>(false);
  const [isBusinessAccount, setIsBusinessAccount] = useState<boolean>(false);

  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Statusbar barStyle={"dark-content"} />
      <Text style={styles.headingText}>
        <Text style={{ fontFamily: fontFamilies.RB }}>GPoint Wallet</Text> is an
        easy
        {"\n"} way to pay and get paid{" "}
      </Text>
      <View style={styles.selectContainer}>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.checkAccount}
            activeOpacity={1}
            onPress={() => {
              setIsPersonalAccount(!isPersonalAccount);
            }}
          >
            <View style={styles.checkboxContainer}>
              <CheckBox
                checked={isPersonalAccount}
                filled={isPersonalAccount}
              />
            </View>
            <View style={styles.subHeadingParent}>
              <Text style={styles.accountHeading}>Personal Account</Text>
              <Text style={styles.subHeading}>
                Shop online or send and receive money. All without sharin your
                payment info.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.checkAccount}
            activeOpacity={1}
            onPress={() => {
              setIsBusinessAccount(!isBusinessAccount);
            }}
          >
            <View style={styles.checkboxContainer}>
              <CheckBox
                checked={isBusinessAccount}
                filled={isBusinessAccount}
              />
            </View>
            <View style={styles.subHeadingParent}>
              <Text style={styles.accountHeading}>Bussiness Account</Text>
              <Text style={styles.subHeading}>
                Accept GPoint online or at the register. Send secure invoices to
                your customers.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Continue"
            containerStyles={styles.button}
            onPress={() => {
              navigation.navigate("CreatePersonalAccount");
            }}
          />
        </View>
      </View>
      <Image
        resizeMode="contain"
        style={styles.bottomContainer}
        source={require("../../../assets/img/Ellipse30.png")}
      />
      <Image
        resizeMode="contain"
        style={styles.roundContainer}
        source={require("../../../assets/img/account_circle.png")}
      />
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
    fontFamily: fontFamilies.RR,
  },
  selectContainer: {
    flex: 0.6,
    backgroundColor: colors.white,
    borderRadius: spacingSizes.large,
    marginHorizontal: spacingSizes.large,
    marginTop: spacingSizes.mediumLarge,
    padding: spacingSizes.large,
  },
  contentContainer: {
    flex: 0.5,
  },
  checkAccount: {
    flexDirection: "row",
    marginVertical: spacingSizes.medium,
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: WIDTH / 1.7,
  },
  accountHeading: {
    fontWeight: "500",
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.RM,
  },
  subHeading: {
    fontWeight: "400",
    fontSize: fontSizes.small,
    color: colors.darkGray,
    fontFamily: fontFamilies.RR,
  },
  bottomContainer: {
    position: "absolute",
    height: 418,
    width: 418,
    top: "84%",
    left: "-30%",
  },
  roundContainer: {
    bottom: "5%",
    right: 0,
    position: "absolute",
    height: 129,
    width: 129,
  },
  subHeadingParent: {
    flex: 1,
  },
  checkboxContainer: {
    transform: [
      {
        scale: 0.8,
      },
    ],
    marginTop: -spacingSizes.small,
  },
});
