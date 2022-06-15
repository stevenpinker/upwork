import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Button from "../../../common/components/Button";
import Feather from "react-native-vector-icons/Feather";
import { HEIGHT, WIDTH } from "../../../common/consts/config";
import { fontSizes, spacingSizes } from "../../../common/consts/size";
import colors from "../../../common/consts/colors";
import BackHeader from "../../../common/components/BackHeader";
import Statusbar from "../../../common/components/Statusbar";
import MainScreen from "../../../common/components/MainScreen";
import { useNavigation } from "@react-navigation/native";

export default function VipSilver() {
  const navigation=useNavigation<any>()
  return (
    <View style={styles.container}>
      <Statusbar barStyle={"light-content"}/>
      <BackHeader />
      <Image
        resizeMode="contain"
        style={styles.topOneImage}
        source={require("../../../assets/img/ellipse60.png")}
      />
      <View style={styles.padding}>
        <MainScreen title="Vip Silver"/>
        <Image
          resizeMode="contain"
          style={styles.leftImage}
          source={require("../../../assets/img/Ellipsehead.png")}
        />
        <View style={styles.dataContainer}>
          <Image
            resizeMode="contain"
            style={styles.roundImage}
            source={require("../../../assets/img/ellipse_fill_left.png")}
          />
          <TouchableOpacity style={styles.price}>
            <Text style={styles.priceText}>$1,000</Text>
          </TouchableOpacity>
          <View style={styles.discreption}>
            <Feather
              name="check-circle"
              size={20}
              color={colors.primaryBlue}
            />
            <Text style={styles.discreptionText}>Social Media Marketing</Text>
          </View>
          <View style={styles.discreption}>
            <Feather
              name="check-circle"
              size={20}
              color={colors.primaryBlue}
            />
            <Text style={styles.discreptionText}>SEO</Text>
          </View>
          <View style={styles.discreption}>
            <Feather
              name="check-circle"
              size={20}
              color={colors.primaryBlue}
            />
            <Text style={styles.discreptionText}>Email Marketing</Text>
          </View>
          <View style={styles.discreption}>
            <Feather
              name="check-circle"
              size={20}
              color={colors.primaryBlue}
            />
            <Text style={styles.discreptionText}>Influencer Marketing</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Back"
              textStyles={styles.backTitleText}
              transparent
              containerStyles={styles.buttonBack}
              contentContainerStyle={styles.buttonHeight}onPress ={()=>navigation.goBack()}
            />
            <Button
              title="Continue"
              textStyles={styles.continueTitleText}
              containerStyles={styles.buttonContinue}
              contentContainerStyle={styles.buttonHeight}onPress={()=>navigation.navigate("ServiceAgreement")}
            />
          </View>
        </View>
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
    paddingHorizontal: spacingSizes.large,
  },
  HeadText: {
    fontWeight: "bold",
    fontSize: fontSizes.large,
  },
  dataContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: spacingSizes.large,
    marginVertical: spacingSizes.large,
    height: "85%",
  },

  price: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: spacingSizes.large,
    backgroundColor: colors.white,
    width: WIDTH / 2,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: spacingSizes.larger,
  },
  priceText: {
    color: colors.primaryBlue,
    fontWeight: "bold",
    fontSize: fontSizes.xlarge,
  },
  discreption: {
    flexDirection: "row",
    marginVertical: spacingSizes.smallMedium,
    alignItems: 'center'
  },
  discreptionText: {
    fontWeight: "bold",
    marginLeft: spacingSizes.small,
    fontSize: fontSizes.medium,
    marginTop: -1
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: spacingSizes.small,
    position: "relative",
  },
  buttonBack: {
    width: WIDTH / 3,
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: spacingSizes.small,
    position: "absolute",
    bottom: 0,
  },
  buttonContinue: {
    width: WIDTH / 3,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  backTitleText: {
    fontSize: fontSizes.small,
  },
  continueTitleText: {
    fontSize: fontSizes.small,
  },
  leftImage: {
    position: "absolute",
    width: 273,
    height: 273,
    top: -60,
   left:160,
  },
  roundImage: {
    position: "absolute",
    width: 188,
    height: 188,
    left: -45,
    bottom: 100,
  },
  topOneImage: {
    position: "absolute",
    width: 199,
    height: 273,
    top: 0,
    left:220,
  },
  buttonHeight:{
      height:40,
  },
});