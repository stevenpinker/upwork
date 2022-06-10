import { Row } from "@growth-ui/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../../common/components/Button";
import colors from "../../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../../common/consts/size";

export default function GWallet() {
  return (
    <View style={styles.container}>
      <Row>
        <Text style={styles.gText}>G</Text>
        <Text style={styles.gBalance}>0.00</Text>
      </Row>
      <View>
        <Text style={styles.inYourWalletText}>In your wallet</Text>
      </View>
      <Button
        title="Transfer Ballance"
        linearGradientProps={{
          colors: [colors.primaryBlue, colors.primaryBlue],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacingSizes.xlarge,
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacingSizes.large,
  },
  gText: {
    fontSize: fontSizes.xlarger,
    fontFamily: fontFamilies.RBlack,
    color: colors.darkGray,
  },
  gBalance: {
    marginLeft: spacingSizes.small,
    color: colors.skyBlue,
    fontFamily: fontFamilies.RBlack,
    fontSize: fontSizes.xlarger,
  },
  inYourWalletText: {
    color: colors.darkGray,
    marginTop: spacingSizes.small,
    marginBottom: spacingSizes.large,
  },
});
