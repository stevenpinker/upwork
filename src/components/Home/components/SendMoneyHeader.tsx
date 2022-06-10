import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import colors from "../../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../../common/consts/size";
import Logo from "../../../assets/img/GPoint_Wallet_Logo.png";
import { Icon, Row } from "@growth-ui/native";
import { useNavigation } from "@react-navigation/native";

export default function SendMoneyHeader() {
  const gradColors = [colors.deepBlue, colors.skyBlue];
  const navigation = useNavigation<any>();
  return (
    <View>
      <LinearGradient colors={gradColors} style={[styles.headerBack]}>
        <Row horizontalAlign="center">
          <Text style={styles.sendMoneyText}>Send Money</Text>
        </Row>
        <Row verticalAlign="middle" style={styles.nameRow}>
          <View style={styles.nameTextCont}>
            <Text style={styles.hiJohnText}>Good Monring,</Text>
            <Text style={styles.handleText}>John</Text>
          </View>
        </Row>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBack: {
    paddingVertical: spacingSizes.xlarge,
    paddingHorizontal: spacingSizes.medium,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    resizeMode: "contain",
    width: 150,
    height: 42,
  },
  circle: {
    height: 85,
    width: 85,
    borderRadius: 44,
    backgroundColor: colors.white,
    marginLeft: spacingSizes.large,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  hiJohnText: {
    fontSize: fontSizes.large,
    fontFamily: fontFamilies.RB,
    color: colors.white,
  },
  nameRow: {
    marginTop: spacingSizes.xlarge,
  },
  nameTextCont: {
    marginLeft: spacingSizes.smallMedium,
  },
  handleText: {
    fontFamily: fontFamilies.RM,
    fontSize: fontSizes.medium,
    marginTop: spacingSizes.small,
    color: colors.white,
  },
  qrCode: {
    position: "absolute",
    bottom: 0,
    right: -2,
  },
  sendMoneyText: {
    fontFamily: fontFamilies.RB,
    color: colors.white,
    fontSize: fontSizes.mediumLarge,
  },
});
