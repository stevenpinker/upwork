import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import BackHeader from "../../common/components/BackHeader";
import Statusbar from "../../common/components/Statusbar";
import MainScreen from "../../common/components/MainScreen";
import colors from "../../common/consts/colors";
import { fontSizes, spacingSizes } from "../../common/consts/size";
import Button from "../../common/components/Button";
import { WIDTH } from "../../common/consts/config";

export default function ChooseYourPlan() {
  return (
    <View>
      <Statusbar />
      <BackHeader />
      <MainScreen title="Choose your Plan" />
      <View style={styles.selectPlan}>
        <ImageBackground
          resizeMode="stretch"
          source={require("../../assets/img/vip_plan_bg.png")}
          imageStyle={styles.vipPlanBg}
          style={[styles.planContainer]}
        >
          <Image
            style={styles.imageContainer}
            source={require("../../assets/img/vip_plan.png")}
          />
          <Text style={styles.contentText}>VIP</Text>
        </ImageBackground>
        <View style={styles.buttons}>
          <Button
            title="Gold"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
          />
          <Button
            title="Gold"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
          />
        </View>
        <ImageBackground
          resizeMode="stretch"
          source={require("../../assets/img/standard_plan_bg.png")}
          imageStyle={styles.vipPlanBg}
          style={[styles.planContainer]}
        >
          <Image
            style={styles.imageContainer}
            source={require("../../assets/img/platinum_plan.png")}
          />
          <Text style={styles.contentText}>STANDARD</Text>
        </ImageBackground>
        <View style={styles.buttons}>
          <Button
            title="Platinum"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
          />
          <Button
            title="Gold"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
          />
        </View>
        <View style={styles.buttonBottom}>
          <Button
            title="Silver"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
          />
          <Button
            title="Bronze"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
          />
        </View>
      </View>
      <Image
        style={styles.ellipse31}
        source={require("../../assets/img/ellipse31.png")}
      />
      <Image
        style={styles.ellipse60}
        source={require("../../assets/img/ellipse60.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  headText: {
    fontWeight: "bold",
    paddingHorizontal: spacingSizes.large,
    fontSize: fontSizes.large,
  },
  selectPlan: {
    paddingHorizontal: spacingSizes.large,
    position: "relative",
  },
  planContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacingSizes.xlarge,
    height: 200,
    width: "100%",
  },
  vipPlanBg: {
    borderRadius: 10,
  },
  imageContainer: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  contentText: {
    fontWeight: "bold",
    fontSize: fontSizes.xlarge,
  },
  goldColor: {
    backgroundColor: "#F1D5A8",
  },
  silverColor: {
    backgroundColor: "#4F93EE",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -24,
  },
  buttonBottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: spacingSizes.mediumLarge,
  },
  buttonBorder: {
    backgroundColor: colors.white,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "40%",
    margin: 10,
  },
  plantextStyle: {
    fontWeight: "bold",
    fontSize: fontSizes.normal,
  },
  buttonStyle: {
    width: WIDTH / 2.6,
    borderWidth: 0.5,
    height: 45,
    borderColor: colors.transparent,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 4,
  },
  buttonText: {
    color: colors.black,
    fontWeight: "600",
  },
  buttonHeight: {
    height: 45,
  },
  ellipse31: {
    position: "absolute",
    height: 273,
    width: 273,
    top: 0,
    right: -80,
    zIndex: -999,
  },
  ellipse60: {
    position: "absolute",
    height: 199,
    width: 199,
    top: 0,
    right: -40,
    zIndex: -999,
  },
});
