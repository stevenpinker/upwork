import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import BackHeader from "../../common/components/BackHeader";
import Statusbar from "../../common/components/Statusbar";
import MainScreen from "../../common/components/MainScreen";
import colors from "../../common/consts/colors";
import { fontSizes, spacingSizes } from "../../common/consts/size";
import Button from "../../common/components/Button";
import { isSmallDevice, WIDTH } from "../../common/consts/config";
import { useNavigation } from "@react-navigation/native";

export default function ChooseYourPlan() {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Statusbar barStyle={"light-content"} />

      <BackHeader />
      <MainScreen title="Choose your Plan" />
      <View style={styles.selectPlan}>
        <ImageBackground
          resizeMode="stretch"
          source={require("../../assets/img/vip_plan_bg.png")}
          imageStyle={styles.vipPlanBg}
          style={styles.planContainer}
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
            onPress={() => navigation.navigate("VipGold")}
          />
          <Button
            title="Silver"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
            onPress={() => navigation.navigate("VipSilver")}
          />
        </View>
        <ImageBackground
          resizeMode="stretch"
          source={require("../../assets/img/standard_plan_bg.png")}
          imageStyle={styles.vipPlanBg}
          style={[styles.planContainer]}
        >
          <Image
            style={styles.platinumPlanImg}
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
            onPress={() => navigation.navigate("StandardPlatinum")}
          />
          <Button
            title="Gold"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
            onPress={() => navigation.navigate("StandardGold")}
          />
        </View>
        <View style={styles.buttonBottom}>
          <Button
            title="Silver"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
            onPress={() => navigation.navigate("StandardSilver")}
          />
          <Button
            title="Bronze"
            linearGradientProps={{ colors: [colors.white, colors.white] }}
            textStyles={styles.buttonText}
            containerStyles={styles.buttonStyle}
            contentContainerStyle={styles.buttonHeight}
            onPress={() => navigation.navigate("StandardBronze")}
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
    marginHorizontal: spacingSizes.large,
    position: "relative",
  },
  planContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacingSizes.larger,
    height: isSmallDevice ? 150 : 200,
    width: "100%",
  },
  vipPlanBg: {
    borderRadius: 10,
  },
  platinumPlanImg: {
    height: 52,
    width: 66,
    resizeMode: "contain",
    marginLeft: spacingSizes.smallMedium,
    marginBottom: spacingSizes.small,
  },
  imageContainer: {
    height: 75,
    width: 60,
    resizeMode: "contain",
    marginLeft: spacingSizes.smallMedium,
    marginBottom: spacingSizes.small,
  },
  contentText: {
    fontWeight: "700",
    fontSize: fontSizes.xlarge,
    marginLeft: spacingSizes.smallMedium,
  },
  goldColor: {
    backgroundColor: "#F1D5A8",
  },
  silverColor: {
    backgroundColor: "#4F93EE",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: -25,
    marginLeft: spacingSizes.smallMedium,
  },
  buttonBottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: spacingSizes.mediumLarge,
    marginLeft: spacingSizes.smallMedium,
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
    width: WIDTH / 2.9,
    borderWidth: 0.5,
    height: 35,
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
    height: 35,
  },
  ellipse31: {
    position: "absolute",
    height: 273,
    width: 273,
    top: "-15%",
    right: "-20%",
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
  leftImage: {
    position: "absolute",
    width: 273,
    height: 273,
    top: -60,
    left: 160,
  },
});
