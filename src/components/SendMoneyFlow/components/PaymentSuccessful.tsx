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

export default function PaymentSuccessful() {
  return (
    <View style={styles.container}>
      <Statusbar />

      <View>
        <Image
          style={styles.imageArt}
          source={require("../../../assets/img/icon_artwork.png")}
        />
        <View style={styles.textCont}>
          <Text style={styles.toJohn}>Payment Successful!</Text>
          <Text style={styles.johnText}>
            Please find below the transaction receipt
          </Text>
        </View>
      </View>
      <View style={styles.bottomText}>
        <Text style={styles.sendText}> G640.00</Text>
        <Text style={styles.sendDescription}>
          You have successfully transferred
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlue,
    justifyContent: "center",
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
    fontSize: fontSizes.xlarge,
    fontFamily: fontFamilies.RM,
    color: colors.white,
    textAlign: "center",
  },
  sendDescription: {
    color: colors.white,
    fontFamily: fontFamilies.RR,
    fontSize: fontSizes.small,
  },
  profilePic: {
    height: 114,
    width: 114,
    alignSelf: "center",
  },
  textCont: {
    alignItems: "center",
    marginVertical: spacingSizes.mediumLarge,
    marginTop:spacingSizes.xlarge,
  },
  toJohn: {
    color: colors.white,
    fontFamily: fontFamilies.RM,
    fontSize: fontSizes.large,
  },
  johnText: {
    fontFamily: fontFamilies.RR,
    fontSize: fontSizes.small,
    color: colors.white,
    marginTop: spacingSizes.small,
  },
  imageArt: {
    height: 104,
    width: 104,
    alignSelf: "center",
  },
  bottomText: {
    alignItems: "center",
    marginTop:spacingSizes.xlarge
  },
});
