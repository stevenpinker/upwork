import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BackHeader from "../../common/components/BackHeader";
import Statusbar from "../../common/components/Statusbar";
import colors from "../../common/consts/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { fontFamilies, fontSizes, spacingSizes } from "../../common/consts/size";

export default function PaymentMethod() {
  return (
    <View style={styles.container}>
      <Statusbar />
      <BackHeader />
      <Text style={styles.headingText}>Payment Method</Text>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.card}>
          <View>
            <Text style={styles.modeContainer}>Bank</Text>
            <Text style={styles.typeContainer}>No fee for adding balance</Text>
          </View>
          <AntDesign
            name="right"
            color={colors.darkGray}
            size={fontSizes.smallNormal}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View>
            <Text style={styles.modeContainer}>Wire</Text>
            <Text style={styles.typeContainer}>
              Only allowed for withdrawal(s)
            </Text>
          </View>
          <AntDesign
            name="right"
            color={colors.darkGray}
            size={fontSizes.smallNormal}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View>
            <Text style={styles.modeContainer}>GPoint Prepaid Card</Text>
            <Text style={styles.typeContainer}>
              Only allowed for withdrawal(s)
            </Text>
          </View>
          <AntDesign
            name="right"
            color={colors.darkGray}
            size={fontSizes.smallNormal}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },

  contentContainer: {
    flex: 0.9,
    paddingHorizontal: spacingSizes.large,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: spacingSizes.large,
    padding: spacingSizes.large,
  },

  headingText: {
    paddingHorizontal: spacingSizes.larger,
    fontSize: fontSizes.large,
    fontWeight: "500",
    marginBottom: spacingSizes.small,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacingSizes.smallMedium,
  },
  modeContainer: {
    color: colors.black,
    fontWeight: "500",
    fontSize: fontSizes.normal,
  },
  typeContainer: {
    color: colors.darkElectricBlue,
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.RR
  },
});
