import { StyleSheet, View, Text } from "react-native";
import React from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../common/consts/colors";
import { spacingSizes } from "../common/consts/size";
import Home from "../components/Home";
import SendMoney from "../components/Home/components/SendMonday";

const BottomTab = createBottomTabNavigator();

export default function BottomNavigationTab() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => {
            return (
              <SimpleLineIcons
                name="home"
                color={colors.midGray}
                size={spacingSizes.large}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Send"
        component={SendMoney}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => {
            return (
              <SimpleLineIcons
                name="paper-plane"
                color={colors.midGray}
                size={spacingSizes.large}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Location"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => {
            return (
              <SimpleLineIcons
                name="location-pin"
                color={colors.midGray}
                size={spacingSizes.large}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Scan"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="qrcode-scan"
                color={colors.midGray}
                size={spacingSizes.large}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
const styles = StyleSheet.create({});
