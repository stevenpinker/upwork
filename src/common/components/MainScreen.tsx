import { View, Text, StyleSheet, Image, ViewStyle  , StyleProp} from "react-native";
import React from "react";
import colors from "../consts/colors";
import { fontFamilies, fontSizes, spacingSizes } from "../consts/size";

type MainScreenPropTypes = {
  title?: string;
  titletwo?: string;
  containerStyles?: StyleProp<ViewStyle>;
};
export default function MainScreen(props: MainScreenPropTypes) {
  const { title , titletwo , containerStyles} = props;
  return (
    <View style={styles.container}>
      <View style={[styles.MainParentContainer , containerStyles]}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={[styles.titleText , styles.titleTwo]}>{titletwo}</Text>
      </View>
      <Image
        style={styles.topEllipse}
        source={require("../../assets/img/ellipse31.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacingSizes.xlarge,
    color: colors.backgroundGray,
    position: 'relative'
  },
  MainParentContainer: {
    flexDirection: "row",
    textAlign: "center",
  },

  titleText: {
    color: colors.black,
    fontSize: fontSizes.large,
    fontFamily: fontFamilies.RM
  },
  topEllipse: {
    height: 273,
    width: 273,
    position: "absolute",
    top: 0,
    right: 0,
  },
  titleTwo:{
    color : colors.deepBlue,
  },
});
