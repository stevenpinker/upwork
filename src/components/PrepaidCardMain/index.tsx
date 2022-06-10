import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

import colors from "../../common/consts/colors";
import Statusbar from "../../common/components/Statusbar";
import BackHeader from "../../common/components/BackHeader";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../common/consts/size";

export default function PrepaidCard() {
  return (
    <View style={styles.container}>
      <Statusbar />
      <BackHeader />
      <View style={styles.upContainer}>
        <ImageBackground
          resizeMode="contain"
          style={styles.backgroundImage}
          source={require("../../assets/img/cardBg.png")}
        >
          <Image
            resizeMode="contain"
            style={styles.imageContainer}
            source={require("../../assets/img/atm.png")}
          />
        </ImageBackground>
      </View>
      <View style={styles.lowerContainer}>
        <TouchableOpacity style={styles.countryContainer}>
          <View style={styles.selectContainer}>
            <Image
              resizeMode="contain"
              style={styles.flagImageContainer}
              source={require("../../assets/img/usa.png")}
            />
          </View>
          <View style={styles.selectContainer}>
            <Text style={styles.countryTextContainer}>U.S{"\n"}Residents</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.countryContainer}>
          <View style={styles.selectContainer}>
            <Image
              resizeMode="contain"
              style={styles.flagImageContainer}
              source={require("../../assets/img/global.png")}
            />
          </View>
          <View style={styles.selectContainer}>
            <Text style={styles.countryTextContainer}>
              Non U.S {"\n"}Residents
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  upContainer: {
    flex: 0.5,
    paddingHorizontal: spacingSizes.large,
    justifyContent: "center",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    height: "100%",
    width: "100%",
    top: "-12%",
  },
  lowerContainer: {
    flex: 0.4,
    paddingHorizontal: spacingSizes.large,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countryContainer: {
    backgroundColor: colors.backgroundGray,
    borderRadius: spacingSizes.smallMedium,
    padding: spacingSizes.mediumLarge,
    width: "46%",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flagImageContainer: {
    backgroundColor: colors.white,
    borderRadius: spacingSizes.xxxlarge,
    height: 120,
    width: 120,
  },
  countryTextContainer: {
    textAlign: "center",
    fontFamily: fontFamilies.RM,
    fontSize: fontSizes.mediumLarge,
    paddingVertical: fontSizes.small,
  },
  selectContainer: {
    flex: 0.5,
    justifyContent: "center",
  },
});
