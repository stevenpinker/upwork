import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../common/consts/size";
import colors from "../../common/consts/colors";
import Button from "../../common/components/Button";
import { WIDTH } from "../../common/consts/config";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function MainPage() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} translucent />
      <LinearGradient
        colors={[colors.darkBlue, colors.deepBlue, colors.lightBlue]}
        style={styles.upContainer}
      >
        <Image
          resizeMode="contain"
          style={{
            position: "absolute",
            height: 350,
            width: 300,
            left: -10,
            top: 0,
          }}
          source={require("../../assets/img/EllipseRight.png")}
        />
        <Image
          resizeMode="contain"
          style={{
            position: "absolute",
            height: 550,
            width: 400,
            right: -10,
            bottom: 0,
          }}
          source={require("../../assets/img/EllipseLeft.png")}
        />
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={styles.logoImageContainer}
            source={require("../../assets/img/GPoint_Wallet_Logo.png")}
          />
        </View>
        <ImageBackground
          resizeMode="contain"
          style={styles.imageBackground}
          source={require("../../assets/img/Trans.png")}
        >
          <Image
            resizeMode="contain"
            style={styles.imageContainer}
            source={require("../../assets/img/Shield.png")}
          />
        </ImageBackground>
        <View style={styles.mainTextContainer}>
          <Text style={styles.textContainer}>Quick . Convenient . Secure</Text>
          <Text style={styles.discriptionTextContainer}>
            Shop, get Gpoints back, use your rewards{"\n"}
            anywhere they accept Gpoint Wallet!
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.downContainer}>
        <Button
          containerStyles={styles.bottomButton}
          onPress={() => {
            navigation.navigate("PersonalAccount");
          }}
          title="Sign In"
        />
        <Button
          textStyles={styles.transBtnText}
          containerStyles={[styles.bottomButton, styles.borderButton]}
          transparent
          onPress={() => {
            navigation.navigate("SelectAccount");
          }}
          title="Create an Account"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  upContainer: {
    flex: 7,

    borderBottomLeftRadius: spacingSizes.xlarge,
    borderBottomRightRadius: spacingSizes.xlarge,
  },
  downContainer: {
    flex: 3,
    paddingHorizontal: 24,
    justifyContent: "space-evenly",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImageContainer: {
    height: 100,
    width: 200,
  },
  imageBackground: {
    height: 250,
    width: 250,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 200,
  },
  imageContainer: {
    height: 200,
    width: 200,
  },
  mainTextContainer: {
    flex: 1,
  },
  textContainer: {
    fontSize: fontSizes.mediumLarge,
    color: colors.white,
    textAlign: "center",
    paddingVertical: spacingSizes.medium,
    fontFamily: fontFamilies.RB,
  },
  discriptionTextContainer: {
    fontSize: fontSizes.smallNormal,
    color: colors.white,
    textAlign: "center",
    fontFamily: fontFamilies.RR,
  },
  buttonContainer: {
    height: 54,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    backgroundColor: colors.darkBlue,
    borderColor: colors.darkBlue,
  },
  buttonTextContainer: {
    color: colors.white,
    fontWeight: "500",
    fontSize: fontSizes.normal,
  },
  createbuttonContainer: {
    height: 54,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.darkBlue,
    backgroundColor: colors.white,
    marginTop: spacingSizes.larger,
  },
  createButtonTextContainer: {
    color: colors.darkBlue,
    fontWeight: "500",
    fontSize: fontSizes.normal,
  },
  bottomButton: {
    width: WIDTH / 1.5,
    alignSelf: "center",
  },
  borderButton: {
    borderWidth: 1,
    borderColor: colors.primaryBlue,
    borderRadius: 5,
  },
  transBtnText: {
    color: colors.primaryBlue,
  },
});
