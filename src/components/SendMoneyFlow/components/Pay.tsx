import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Statusbar from "../../../common/components/Statusbar";
import BackHeader from "../../../common/components/BackHeader";
import MainScreen from "../../../common/components/MainScreen";
import Input from "../../../common/components/TextInput";
import Button from "../../../common/components/Button";
import colors from "../../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../../common/consts/size";
import { WIDTH } from "../../../common/consts/config";
import { useNavigation } from "@react-navigation/native";

export default function Pay() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Statusbar />
      <BackHeader />
      <MainScreen title="Pay" />
      <View style={styles.selectContainer}>
        <View style={styles.contentContainer}>
          <Input label="John Lee" />
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
            title="Review"
            textStyles={styles.continueTitleText}
            containerStyles={styles.buttonContinue}
            contentContainerStyle={styles.buttonHeight}
            onPress={() => {
              navigation.navigate("ReviewSend");
            }}
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
    paddingTop: spacingSizes.large,
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
});
