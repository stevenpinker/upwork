import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Button from "../../../common/components/Button";
import Entypo from "react-native-vector-icons/Entypo";
import { HEIGHT, WIDTH } from "../../../common/consts/config";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../../common/consts/size";
import colors from "../../../common/consts/colors";
import BackHeader from "../../../common/components/BackHeader";
import Statusbar from "../../../common/components/Statusbar";
import MainScreen from "../../../common/components/MainScreen";
import { useNavigation } from "@react-navigation/native";

export default function StandardSilverHighProfit() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Statusbar barStyle={"light-content"}/>
      <BackHeader />
      <Image
        resizeMode="contain"
        style={styles.topOneImage}
        source={require("../../../assets/img/ellipse60.png")}
      />
      <Image
        resizeMode="contain"
        style={styles.topTwoImage}
        source={require("../../../assets/img/Ellipsehead.png")}
      />
      <Image
        resizeMode="contain"
        style={styles.roundImage}
        source={require("../../../assets/img/vipsilver.png")}
      />

      <MainScreen title="Silver" />
      <View style={styles.padding}>
        <View style={styles.dataContainer}>
          <Text style={styles.restaurantText}>High Profit Margin</Text>
          <View style={styles.star}>
            <View style={styles.starIcon}>
              <Text style={styles.tenText}>10%</Text>
            </View>
          </View>
          <View style={styles.StarContainer}>
            <View style={styles.discreption}>
              <Entypo
                name="dot-single"
                size={spacingSizes.large}
                color={colors.black}
              />
              <Text style={styles.discreptionText}>
                10K influencer(s) shout-out
              </Text>
            </View>
            <View style={styles.discreption}>
              <Entypo
                name="dot-single"
                size={spacingSizes.large}
                color={colors.black}
              />
              <Text style={styles.discreptionText}>
                1 post+2 stories per week
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          textStyles={styles.backTitleText}
          transparent
          containerStyles={styles.buttonBack}
          contentContainerStyle={styles.buttonHeight}
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Continue"
          textStyles={styles.continueTitleText}
          containerStyles={styles.buttonContinue}
          contentContainerStyle={styles.buttonHeight}
          onPress={()=>navigation.navigate("ServiceAgreement")}
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
  padding: {
    flex: 10,
    paddingHorizontal: spacingSizes.large,
    position: "relative",
    zIndex: -999,
  },
  headText: {
    fontWeight: "bold",
    fontSize: fontSizes.large,
  },
  dataContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: spacingSizes.large,
    marginBottom: spacingSizes.large,
    paddingVertical: spacingSizes.small,
    marginTop: spacingSizes.small,
  },

  restaurantText: {
    color: colors.darkGray,
    fontFamily: fontFamilies.RM,
    fontSize: fontSizes.large,
    textAlign: "center",
    marginTop: spacingSizes.xlarge,
  },

  star: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: spacingSizes.mediumLarge,
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: spacingSizes.larger,
  },
  starIcon: {
    height: 100,
    width: 100,
    fontSize: fontSizes.xlarge,
    fontFamily: fontFamilies.RB,
    alignItems: "center",
    justifyContent: "center",
  },
  tenText: {
    color: colors.bts,
    fontSize: fontSizes.xlarger,
    fontFamily: fontFamilies.RB,
  },
  discreption: {
    flexDirection: "row",
    marginVertical: spacingSizes.smallMedium,
    alignItems: "center",
  },
  discreptionText: {
    fontFamily: fontFamilies.RM,
    marginLeft: spacingSizes.small,
    fontSize: fontSizes.medium,
  },

  selectCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: spacingSizes.smallMedium,
  },
  product: {
    alignItems: "center",
  },
  productContainer: {
    borderWidth: 1,
    paddingHorizontal: spacingSizes.small,
    paddingVertical: 14,
    borderRadius: 5,
    marginTop: 10,
    width: WIDTH / 4,
  },
  rewardContainer: {
    height: 220,
    backgroundColor: colors.white,
    padding: spacingSizes.medium,
    borderRadius: 10,
    marginVertical: spacingSizes.small,
  },
  servicesText: {
    fontSize: fontSizes.xtiny,
    fontWeight: "bold",
    textAlign: "center",
  },
  servicesMarginText: {
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacingSizes.large,
    paddingBottom: spacingSizes.large,
  },
  buttonBack: {
    width: WIDTH / 2.6,
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: spacingSizes.small,
  },
  buttonContinue: {
    width: WIDTH / 2.6,
  },
  backTitleText: {
    fontSize: fontSizes.small,
  },
  continueTitleText: {
    fontSize: fontSizes.small,
  },
  rewardText: {
    fontWeight: "bold",
    fontSize: fontSizes.large,
    marginVertical: spacingSizes.small,
    paddingLeft: spacingSizes.large,
  },
  topOneImage: {
    position: "absolute",
    width: 199,
    height: 199,
    top: 0,
    right: "-8%",
    zIndex: 999,
  },
  topTwoImage: {
    position: "absolute",
    width: 273,
    height: 273,
    top: -10,
    right: "-15%",
    zIndex: 999,
  },
  BottomPng: {
    height: 63,
    width: 63,
    position: "absolute",
    right: 30,
    top: 415,
  },
  buttonHeight: {
    height: 40,
  },
  roundImage: {
    position: "absolute",
    width: 188,
    height: 188,
    left: -45,
    bottom: 80,
  },
  StarContainer: {
    marginBottom: spacingSizes.xlarge,
  },
  roundedImage: {
    position: "absolute",
    width: 188,
    height: 188,
    left: -45,
    bottom: 100,
  },
});
