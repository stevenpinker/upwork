import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MainScreen from "../../common/components/MainScreen";
import Statusbar from "../../common/components/Statusbar";
import colors from "../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../common/consts/size";
import Input from "../../common/components/TextInput";
import { CheckBox } from "@growth-ui/native";
import Button from "../../common/components/Button";
import { WIDTH } from "../../common/consts/config";
import { useNavigation } from "@react-navigation/native";

export default function PersonalAccount() {
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Statusbar barStyle={"dark-content"} />

      <MainScreen
        containerStyles={styles.mainScreenStyle}
        title="Sign in to "
        titletwo="GPoint Wallet"
      />
      <View style={styles.mainContainer}>
        <View style={styles.topInputCont}>
          <Input label="Email, Phone Number or Username" />
          <Input label="Password" />
        </View>
        <View style={styles.checkBoxCOnt}>
          <TouchableOpacity
            onPress={() => {
              setIsRememberMe(!isRememberMe);
            }}
            style={styles.rememberCont}
            activeOpacity={1}
          >
            <View style={styles.checkboxContainer}>
              <CheckBox filled={isRememberMe} checked={isRememberMe} />
            </View>
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ResetPassword");
            }}
          >
            <Text style={styles.forgetText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Sign in"
          containerStyles={styles.signInButton}
          onPress={() => {
            navigation.navigate("BottomTab");
          }}
        />
      </View>
      <View style={styles.bottomTextCont}>
        <TouchableOpacity
          style={styles.forgotContainer}
          onPress={() => {
            navigation.navigate("ResetPassword");
          }}
        >
          <Text style={[styles.textBlue, styles.forgotText]}>
            Forgot the Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.notAccountCont}
          onPress={() => {
            navigation.navigate("CreatePersonalAccount");
          }}
        >
          <Text>Don't have an account?</Text>
          <Text style={[styles.textBlue, styles.signupText]}> Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageMainContainer}>
        <Image
          style={styles.pngContainer}
          source={require("../../assets/img/Ellipse30.png")}
        />
        <Image
          style={styles.pngContainerTwo}
          source={require("../../assets/img/ellipse31.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
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
  topInputCont: {
    paddingHorizontal: spacingSizes.large,
    marginTop: spacingSizes.large,
  },
  rememberCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    fontSize: fontSizes.tiny,
    color: colors.darkElectricBlue,
  },
  checkBoxCOnt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: spacingSizes.large,
    paddingHorizontal: spacingSizes.large,
  },
  forgetText: {
    color: colors.primaryBlue,
    fontSize: fontSizes.tiny,
  },
  signInButton: {
    width: WIDTH / 1.5,
    alignSelf: "center",
    marginVertical: spacingSizes.large,
  },
  textBlue: {
    color: colors.primaryBlue,
  },
  notAccountCont: {
    flexDirection: "row",
    marginBottom: spacingSizes.small,
  },
  forgotContainer: {
    paddingVertical: spacingSizes.small,
  },
  signupText: {
    fontWeight: "700",
    fontSize: fontSizes.small,
  },
  bottomTextCont: {
    alignItems: "center",
    marginVertical: spacingSizes.xlarge,
  },
  forgotText: {
    fontFamily: fontFamilies.RM,
  },
  pngContainer: {
    height: 92,
    width: 92,
    position: "absolute",
    left: 20,
  },
  pngContainerTwo: {
    height: 261,
    width: 261,
    position: "absolute",
    right: 0,
    top: 30,
  },
  imageMainContainer: {
    position: "relative",
  },
  mainScreenStyle: {
    marginTop: spacingSizes.xlarge,
    marginBottom: spacingSizes.small,
  },
  checkboxContainer: {
    transform: [
      {
        scale: 0.8,
      },
    ],
  },
});
