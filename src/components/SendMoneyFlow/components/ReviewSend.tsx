import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import Statusbar from "../../../common/components/Statusbar";
import BackHeader from "../../../common/components/BackHeader";
import MainScreen from "../../../common/components/MainScreen";
import Button from "../../../common/components/Button";
import colors from "../../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../../common/consts/size";
import { WIDTH } from "../../../common/consts/config";
import { useNavigation } from "@react-navigation/native";

export default function ReviewSend() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Statusbar />
      <BackHeader />
      <MainScreen title="Review & Send" />
      <View style={styles.selectContainer}>
        <Text style={styles.sendText}>Send G640.00</Text>
        <View>
          <Image
            resizeMode="contain"
            style={styles.profilePic}
            source={require("../../../assets/img/profile_pic.png")}
          />
          <View style={styles.textCont}>
            <Text style={styles.toJohn}>to John Lee</Text>
            <Text style={styles.johnText}>@John</Text>
            <Text style={styles.johnText}>(800) 321 5566</Text>
          </View>
        </View>
        <View style={styles.buttonContainers}>
          <Button
            title="Cancel"
            textStyles={styles.backTitleText}
            transparent
            containerStyles={styles.buttonBack}
            contentContainerStyle={styles.buttonHeight}
          />
          <Button
            onPress={() => {
              navigation.navigate("PaymentSuccessful");
            }}
            title="Send"
            textStyles={styles.continueTitleText}
            containerStyles={styles.buttonContinue}
            contentContainerStyle={styles.buttonHeight}
          />
        </View>
        <Image
          resizeMode="contain"
          style={styles.pngContainer}
          source={require("../../../assets/img/ellipsefill.png")}
        />
        <Image
          resizeMode="contain"
          style={styles.pngEllipse}
          source={require("../../../assets/img/ellipse32.png")}
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
  headingText: {
    textAlign: "center",
    marginTop: spacingSizes.xlarge,
    fontSize: fontSizes.large,
  },
  selectContainer: {
    flex: 0.9,
    backgroundColor: colors.white,
    marginHorizontal: spacingSizes.large,
    marginTop: spacingSizes.mediumLarge,
    paddingHorizontal: spacingSizes.large,
  },
  contentContainer: {
    flex: 0.5,
  },

  buttonContainer: {
    flex: 0.5,
    alignItems: "center",
  },
  button: {
    width: WIDTH / 1.8,
  },
  textHeading: {
    fontFamily: fontFamilies.RB,
    fontSize: fontSizes.mediumLarge,
    marginBottom: spacingSizes.large,
  },
  subHeading: {
    fontFamily: fontFamilies.RR,
    fontSize: fontSizes.normal,
    color: colors.darkGray,
  },
  inputContainer: {
    padding: spacingSizes.small,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: spacingSizes.smallMedium,
    borderColor: colors.darkGray,
  },
  msgText: {
    fontFamily: fontFamilies.RR,
    fontSize: fontSizes.small,
    color: colors.darkGray,
  },
  buttonContainers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: spacingSizes.large,
    alignItems: "flex-end",
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
  pngContainer: {
    position: "absolute",
    right: "-20%",
    height: 188,
    width: 188,
    bottom: "20%",
  },
  pngEllipse: {
    position: "absolute",
    right: "-23%",
    height: 273,
    width: 273,
    bottom: "13%",
  },
  sendText: {
    fontSize: fontSizes.mediumLarge,
    fontFamily: fontFamilies.RM,
    color: colors.darkGray,
    textAlign: "center",
    marginVertical: spacingSizes.large,
  },
  profilePic: {
    height: 114,
    width: 114,
    alignSelf: "center",
  },
  textCont: {
    alignItems: "center",
    marginVertical: spacingSizes.mediumLarge,
  },
  toJohn: {
    color: colors.darkGray,
    fontFamily: fontFamilies.RM,
    fontSize: fontSizes.mediumLarge,
  },
  johnText: {
    fontFamily: fontFamilies.RR,
    fontSize: fontSizes.small,
    color: colors.darkGray,
  },
});
