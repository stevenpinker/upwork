import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import Statusbar from "../../common/components/Statusbar";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../common/consts/size";
import BackHeader from "../../common/components/BackHeader";
import colors from "../../common/consts/colors";
import { LinearGradient } from "expo-linear-gradient";
export default function MyQrCode() {
  return (
    <LinearGradient
      colors={[colors.white, colors.extremeLightBlue]}
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <Statusbar />
        <BackHeader />
        <Text style={styles.headText}>MY QR Code</Text>
        <View style={styles.userContainer}>
          <Image
            resizeMode="contain"
            style={styles.userimage}
            source={require("../../assets/img/user.png")}
          />
          <Text style={styles.userNameText}>John Lee</Text>
          <View style={styles.johLeeContainer}>
            <View style={styles.backgroundWave}>
              <Text style={styles.handleText}>@john</Text>
              <Image
                resizeMode="contain"
                style={styles.imageContiner}
                source={require("../../assets/img/qrimage.png")}
              />
            </View>
          </View>
          <Image
            source={require("../../assets/img/Wave.png")}
            style={styles.wave}
          />
        </View>
        <TouchableOpacity style={styles.shareButtonContainer}>
          <Text style={styles.shareMyCodeText}>Share my code</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.scanButtonContainer}>
            <Text
              style={{
                fontFamily: fontFamilies.RM,
              }}
            >
              Scan here
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mycodebuttonContainer}>
            <Text
              style={{
                color: colors.white,
                fontFamily: fontFamilies.RM,
              }}
            >
              My Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: fontSizes.large,
  },
  userContainer: {
    margin: spacingSizes.large,
    borderRadius: spacingSizes.small,
    backgroundColor: colors.white,
    flex: 1,
    position: "relative",
    paddingVertical: spacingSizes.large,
  },
  userimage: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  userNameText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: fontSizes.large,
  },
  backgroundWave: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContiner: {
    height: 150,
    width: 150,
    alignSelf: "center",
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: spacingSizes.large,
  },
  shareButtonContainer: {
    borderRadius: 10,
    width: "60%",
    borderWidth: 1,
    borderColor: colors.white,
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  scanButtonContainer: {
    borderRadius: 10,
    width: "40%",
    backgroundColor: colors.white,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonTextContainer: {
    color: colors.white,
    fontWeight: "500",
    fontSize: fontSizes.normal,
    textAlign: "center",
  },
  mycodebuttonContainer: {
    borderRadius: 10,
    width: "40%",
    backgroundColor: colors.buttonGrad1,
    borderColor: colors.darkBlue,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  createButtonTextContainer: {
    color: colors.darkBlue,
    fontSize: fontSizes.normal,
  },
  shareMyCodeText: {
    fontFamily: fontFamilies.RM,
    color: colors.white,
  },
  johLeeContainer: {
    marginTop: spacingSizes.large,
  },
  handleText: {
    color: colors.darkGray,
    fontFamily: fontFamilies.RB,
    fontSize: fontSizes.normal,
  },
  wave: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
  },
});
