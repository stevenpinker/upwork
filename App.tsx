import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigators/AppNavigator";
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    RBlack: require('./src/assets/fonts/Roboto-Black.ttf'),
    RBlackItalic: require('./src/assets/fonts/Roboto-BlackItalic.ttf'),
    RB: require('./src/assets/fonts/Roboto-Bold.ttf'),
    RBI: require('./src/assets/fonts/Roboto-BoldItalic.ttf'),
    RI: require('./src/assets/fonts/Roboto-Italic.ttf'),
    RL: require('./src/assets/fonts/Roboto-Light.ttf'),
    RLI: require('./src/assets/fonts/Roboto-LightItalic.ttf'),
    RM: require('./src/assets/fonts/Roboto-Medium.ttf'),
    RMI: require('./src/assets/fonts/Roboto-MediumItalic.ttf'),
    RR: require('./src/assets/fonts/Roboto-Regular.ttf'),
    RT: require('./src/assets/fonts/Roboto-Thin.ttf'),
    RTI: require('./src/assets/fonts/Roboto-ThinItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
