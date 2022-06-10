import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { HEIGHT, WIDTH } from "../consts/config";

export default function EllipsesLayout() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.leftEllipse}
        source={require("../../assets/img/ellipse32.png")}
      />
      <Image
        style={styles.topEllipse}
        source={require("../../assets/img/Ellipse30.png")}
      />
      <Image
        style={styles.bottomEllipse}
        source={require("../../assets/img/Ellipse30.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: WIDTH,
    height: HEIGHT,
  },
  leftEllipse: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    left: -50,
    position: 'absolute'
  },
  topEllipse: {
    top: 0,
    left: "50%",
    height: 100,
    width: 100,
    resizeMode: "contain",
    position: 'absolute'
  },
  bottomEllipse: {
    bottom: 0,
    left: "40%",
    height: 100,
    width: 100,
    resizeMode: "contain",
    position: 'absolute'
  },
});
