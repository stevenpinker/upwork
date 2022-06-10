import { View, StyleSheet, Image } from "react-native";
import React from "react";
import MainScreen from "../../common/components/MainScreen";
import Statusbar from "../../common/components/Statusbar";
import colors from "../../common/consts/colors";
import { spacingSizes } from "../../common/consts/size";
import Input from "../../common/components/TextInput";
import Button from "../../common/components/Button";
import { WIDTH } from "../../common/consts/config";
import { useNavigation } from "@react-navigation/native";
import InputLabel from "../../common/components/InputLabel";

export default function CreateNewPassword() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Statusbar barStyle={"dark-content"} />

      <MainScreen
        containerStyles={styles.mainScreenStyle}
        title="Create new password"
      />
      <View style={styles.mainContainer}>
        <View style={styles.topInputCont}>
          <InputLabel label="Your new password must be different from the previous used passwords." />
          <View style={styles.inputsContainer}>
            <Input
              label="Password"
              bottomLabel="Must be at least 8 characters."
            />
            <Input label="Password" bottomLabel="Both password must match." />
          </View>
        </View>
        <Button
          title="Reset Password"
          onPress={() => {
            navigation.navigate("PersonalAccount");
          }}
          containerStyles={styles.signInButton}
        />
      </View>
      <View style={styles.imageMainContainer}>
        <Image
          style={styles.pngContainer}
          source={require("../../assets/img/Ellipse30.png")}
        ></Image>
        <Image
          style={styles.pngContainerTwo}
          source={require("../../assets/img/ellipse31.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  mainContainer: {
    backgroundColor: colors.white,
    marginHorizontal: spacingSizes.large,
    borderRadius: 15,
    marginVertical: spacingSizes.smallMedium,
    paddingBottom: spacingSizes.large,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4.62,

    elevation: 2,
  },
  topInputCont: {
    paddingHorizontal: spacingSizes.large,
    marginTop: spacingSizes.large,
  },
  signInButton: {
    width: WIDTH / 1.5,
    alignSelf: "center",
    marginVertical: spacingSizes.large,
  },
  pngContainer: {
    height: 92,
    width: 92,
    position: "absolute",
    left: 20,
  },
  pngContainerTwo: {
    height: 261,
    width: 261,
    position: "absolute",
    right: 0,
    top: 30,
  },
  imageMainContainer: {
    position: "relative",
  },
  mainScreenStyle: {
    marginTop: spacingSizes.xlarge,
    marginBottom: spacingSizes.small,
  },
  inputsContainer: {
    marginTop: spacingSizes.smallMedium,
  },
});
