import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet, StatusBar, ScrollView } from "react-native";
import colors from "../../common/consts/colors";
import GWallet from "./components/GWallet";
import HomeHeader from "./components/Header";
import Transactions from "./components/Transactions";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar translucent barStyle={"light-content"} />
        <HomeHeader />
        <GWallet />
        <Transactions />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
