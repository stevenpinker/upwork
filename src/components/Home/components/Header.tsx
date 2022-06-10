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

export default function HomeHeader() {
  const gradColors = [colors.deepBlue, colors.skyBlue];
  const navigation = useNavigation<any>();
  return (
    <View>
      <LinearGradient colors={gradColors} style={[styles.headerBack]}>
        <Row horizontalAlign="space-between">
          <Row>
            <Image source={Logo} style={styles.logo} />
          </Row>
          <Row>
            <Icon name="search" color="white" size={30} />
            <Icon name="notifications" color="white" size={25} />
            <Icon
              name="settings"
              color="white"
              size={25}
              onPress={() => {
                navigation.navigate("Settings");
              }}
            />
          </Row>
        </Row>
        <Row verticalAlign="middle" style={styles.nameRow}>
          <View style={styles.circle}>
            <Icon name="image" color="blue-400" size={25} />
            <Icon
              name="qrcode"
              color="black"
              containerStyle={styles.qrCode}
              size={25}
              onPress={() => {
                navigation.navigate("ShowQR");
              }}
            />
          </View>
          <View style={styles.nameTextCont}>
            <Text style={styles.hiJohnText}>Hi John!</Text>
            <Text style={styles.handleText}>@John</Text>
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
    fontSize: fontSizes.xlarge,
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
});
