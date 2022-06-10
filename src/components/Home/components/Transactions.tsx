import { Icon, Row } from "@growth-ui/native";
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../../../common/consts/colors";
import { fontFamilies, spacingSizes } from "../../../common/consts/size";

export default function Transactions() {
  return (
    <View style={styles.container}>
      <Row style={styles.trnxHeaderRow} horizontalAlign="center">
        <Text style={styles.trnsxText}>Transactions</Text>
      </Row>
      <View style={styles.listContainer}>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          data={["", "", "", "", ""]}
          renderItem={({ item }) => {
            return (
              <Row
                style={styles.listItemRow}
                horizontalAlign="space-between"
                verticalAlign="middle"
              >
                <Row>
                  <View style={styles.circle}>
                    <Icon name="image" color="blue-400" size={15} />
                  </View>
                  <Text style={styles.listText}>
                    Lorem ipsum dolor sit, amet consectetur
                  </Text>
                </Row>
                <Text style={styles.gText}>G 0.4</Text>
              </Row>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacingSizes.larger,
  },
  trnxHeaderRow: {
    paddingVertical: spacingSizes.smallMedium,
    backgroundColor: colors.white,
  },
  trnsxText: {
    color: colors.skyBlue,
    fontFamily: fontFamilies.RM,
  },
  circle: {
    height: 49,
    width: 49,
    borderRadius: 25,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  listItemRow: {
    flex: 1,
    width: "100%",
    paddingHorizontal: spacingSizes.large,
    marginBottom: spacingSizes.medium,
  },
  listContainer: {
    marginTop: spacingSizes.large,
  },
  listText: {
    width: "60%",
    marginLeft: spacingSizes.medium,
    color: colors.darkElectricBlue,
    fontFamily: fontFamilies.RR,
  },
  gText: {
    color: colors.darkElectricBlue,
    fontFamily: fontFamilies.RR,
  },
});
