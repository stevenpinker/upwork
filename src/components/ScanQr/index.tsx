import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Statusbar from "../../common/components/Statusbar";
import MainScreen from "../../common/components/MainScreen";
import { fontSizes, spacingSizes } from "../../common/consts/size";
import BackHeader from "../../common/components/BackHeader";
import colors from "../../common/consts/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Button from "../../common/components/Button";
import { WIDTH } from "../../common/consts/config";
import { useNavigation } from "@react-navigation/native";
export default function ForgetPassword() {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Statusbar barStyle={"dark-content"} translucent />
      <BackHeader />
      <MainScreen title="Scan QR Code" />
      <View style={styles.mainContainer}>
        <Text style={styles.placeQrText}>
          Place the QR code inside the area
        </Text>
        <Text style={styles.automaticallyText}>
          scanning will start automatically
        </Text>
        <Image
          resizeMode="contain"
          style={styles.qrImage}
          source={require("../../assets/img/qrimage.png")}
        />
        <View style={styles.actionContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.roundedIcon}>
              <MaterialCommunityIcons
                color={colors.darkGray}
                name="printer"
                size={fontSizes.xlarge}
              />
            </View>
            <View style={styles.roundedIcon}>
              <Entypo
                color={colors.darkGray}
                name="mail"
                size={fontSizes.xlarge}
              />
            </View>
            <View style={styles.roundedIcon}>
              <MaterialCommunityIcons
                color={colors.darkGray}
                name="download"
                size={fontSizes.xlarge}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Scan here" containerStyles={styles.buttonStyle} />
          <Button
            title="My code"
            transparent
            onPress={() => {
              navigation.navigate("MyCode");
            }}
            containerStyles={[styles.buttonStyle, styles.buttonBorder]}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  BottomTextContainer: {
    marginVertical: spacingSizes.mediumLarge,
  },
  TextBottom: {
    fontSize: fontSizes.tiny,
  },
  mainContainer: {
    backgroundColor: colors.white,
    marginHorizontal: spacingSizes.large,
    borderRadius: 15,
    marginVertical: spacingSizes.smallMedium,
    paddingBottom: spacingSizes.large,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4.62,

    elevation: 2,
  },
  placeQrText: {
    textAlign: "center",
    fontSize: fontSizes.medium,
    fontWeight: "500",
    marginVertical: spacingSizes.large,
  },
  automaticallyText: {
    textAlign: "center",
    fontSize: fontSizes.normal,
  },
  qrImage: {
    width: 142,
    height: 142,
    alignSelf: "center",
    marginVertical: spacingSizes.xxlarge,
  },
  buttonStyle: {
    width: WIDTH / 2.8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacingSizes.large,
    marginVertical: spacingSizes.xlarge,
  },
  buttonBorder: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.darkElectricBlue,
  },
  actionContainer: {
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  roundedIcon: {
    borderWidth: 1,
    borderRadius: 25,
    padding: spacingSizes.smallMedium,
    borderColor: colors.darkGray,
  },
});
