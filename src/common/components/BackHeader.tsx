import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Statusbar from "../../common/components/Statusbar";
import { fontSizes, spacingSizes } from "../../common/consts/size";
import colors from "../../common/consts/colors";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

type BackHeaderPropType = {
  leftIconPress?: () => void;
};

export default function BackHeader(props: BackHeaderPropType) {
  const { leftIconPress } = props;
  const navigation = useNavigation<any>();
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity
        onPress={() => {
          if (leftIconPress) {
            leftIconPress();
          } else {
            navigation.goBack();
          }
        }}
        style={styles.iconBox}
      >
        <Entypo
          name="chevron-left"
          size={fontSizes.large}
          color={colors.grey}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "flex-start",
    marginTop: spacingSizes.smallMedium,
  },
  iconBox: {
    paddingHorizontal: spacingSizes.large,
    paddingTop: spacingSizes.small,
    paddingBottom: spacingSizes.medium,
  },
});
