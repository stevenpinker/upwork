import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Button from "../../../common/components/Button";
import Feather from "react-native-vector-icons/Feather";
import { HEIGHT, WIDTH } from "../../../common/consts/config";
import { fontSizes, spacingSizes } from "../../../common/consts/size";
import colors from "../../../common/consts/colors";
import BackHeader from "../../../common/components/BackHeader";
import Statusbar from "../../../common/components/Statusbar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainScreen from "../../../common/components/MainScreen";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import ModalComponent from "../../../common/components/Modal";
export default function StandardSilver() {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Statusbar barStyle={"light-content"}/>
      <BackHeader />
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="Products"
        menuItems={[
          {
            title: "Low Profile Margin",
            onPress: () => {
              setModalVisible(false);
              navigation.navigate("StandardSilverLowProfit");
            },
          },
          {
            title: "High Profile Margin",
            onPress: () => {
              setModalVisible(false);
              navigation.navigate("StandardSilverHighProfit");
            },
          },
        ]}
      />
      <Image
        resizeMode="contain"
        style={styles.topTwoImage}
        source={require("../../../assets/img/Ellipsehead.png")}
      />
      <Image
        resizeMode="contain"
        style={styles.ellipseSixty}
        source={require("../../../assets/img/ellipse60.png")}
      />
      <MainScreen title="Silver" />
      <View style={styles.padding}>
        <View style={styles.dataContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.star}>
              <Image
                style={styles.starIcon}
                source={require("../../../assets/img/silverStar.png")}
              />
            </View>
          </View>
          <View style={styles.StarContainer}>
            <View style={styles.discreption}>
              <Feather
                name="check-circle"
                size={spacingSizes.large}
                color={colors.midGray}
              />
              <Text style={styles.discreptionText}>YouTube Commercial</Text>
            </View>
            <View style={styles.discreption}>
              <Feather
                name="check-circle"
                size={spacingSizes.large}
                color={colors.midGray}
              />
              <Text style={styles.discreptionText}>Product Shoot</Text>
            </View>
            <View style={styles.discreption}>
              <Feather
                name="check-circle"
                size={spacingSizes.large}
                color={colors.primaryBlue}
              />
              <Text style={styles.discreptionText}>Influencer Campaign</Text>
            </View>
            <View style={styles.discreption}>
              <Feather
                name="check-circle"
                size={spacingSizes.large}
                color={colors.primaryBlue}
              />
              <Text style={styles.discreptionText}>
                Social Media Advertising
              </Text>
            </View>
          </View>
          <View style={styles.termsContainer}>
            <Text style={styles.termTextContainer}>
              *Unhighlighted services are available in upper plan
            </Text>
          </View>
        </View>
        <View style={styles.rewardTextCont}>
          <Text style={styles.rewardText}>Reward Percentage</Text>
        </View>

        <View style={styles.rewardContainer}>
          <View style={styles.selectCart}>
            <View style={styles.product}>
              <Ionicons
                name="ios-restaurant"
                size={fontSizes.xlarge}
                color={colors.bts}
              />
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() =>
                  navigation.navigate("StandardSilverRestaurant")
                }
              >
                <Text style={styles.servicesText}>Restaurant</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
              <MaterialCommunityIcons
                name="cart"
                size={fontSizes.xlarge}
                color={colors.bts}
              />
              <TouchableOpacity
                style={[styles.productContainer, styles.dropContainer]}
                onPress={handleModal}
              >
                <Text style={styles.servicesText}>Products</Text>
                <Ionicons name="caret-down-sharp" size={10} />
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
              <MaterialCommunityIcons
                name="store"
                size={fontSizes.xlarge}
                color={colors.bts}
              />
              <TouchableOpacity 
              onPress={()=>navigation.navigate("StandardSilverServiceProvider")}
              style={styles.productContainer}>
                <Text style={styles.servicesText}>Service Provider</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Back"
              textStyles={styles.backTitleText}
              transparent
              containerStyles={styles.buttonBack}
              onPress={() => navigation.goBack()}
            />
            <Button
              title="Continue"
              textStyles={styles.continueTitleText}
              containerStyles={styles.buttonContinue}
              onPress={() => navigation.navigate("ServiceAgreement")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.bottomPng}
        source={require("../../../assets/img/circle.png")}
      />
      <Image
        resizeMode="contain"
        style={styles.roundedImage}
        source={require("../../../assets/img/ellipse_fill_left.png")}
      />
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
    flex: 1,
  },
  headText: {
    fontWeight: "bold",
    fontSize: fontSizes.large,
  },
  dataContainer: {
    flex: 4,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: spacingSizes.large,
    marginVertical: spacingSizes.small,
    paddingVertical: spacingSizes.small,
  },

  rewardTextCont: {
    flex: 0.4,
    position: "relative",
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
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: spacingSizes.larger,
  },
  starIcon: {
    height: HEIGHT / 12,
    width: WIDTH / 6,
    resizeMode: "contain",
  },
  discreption: {
    flexDirection: "row",
    marginVertical: spacingSizes.smallMedium,
    alignItems: "center",
  },
  discreptionText: {
    fontWeight: "bold",
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
    alignItems: "center",
  },
  rewardContainer: {
    flex: 2,
    backgroundColor: colors.white,
    justifyContent:"space-between",
    borderRadius: 10,
    marginBottom: spacingSizes.mediumLarge,
    paddingVertical: spacingSizes.large,
    paddingHorizontal:spacingSizes.mediumLarge
    
  },
  servicesText: {
    fontSize: fontSizes.xtiny,
    textAlign: "center",
    fontWeight: "500",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacingSizes.small,
    paddingBottom: spacingSizes.small,
  },
  buttonBack: {
    width: WIDTH / 2.9,
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: spacingSizes.small,
  },
  buttonContinue: {
    width: WIDTH / 2.9,
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
  topTwoImage: {
    position: "absolute",
    width: 273,
    height: 273,
    top: 0,
    left: 180,
  },
  ellipseSixty: {
    position: "absolute",
    width: 199,
    height: 199,
    top: 15,
    left: 220,
  },
  bottomPng: {
    height: 63,
    width: 63,
    position: "absolute",
    right: 30,
    top: "68%",
    zIndex: -999,
  },
  roundedImage: {
    position: "absolute",
    width: 188,
    height: 188,
    left: "-10%",
    bottom: "10%",
    zIndex: -999,
  },

  StarContainer: {
    flex: 3,
  },
  dropContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  termTextContainer: {
    fontSize: fontSizes.tiny,
    textAlign: "center",
  },
  logoContainer: {
    flex: 2,
  },
  termsContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
