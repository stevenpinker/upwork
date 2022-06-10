import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "../../../common/components/TextInput";
import colors from "../../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../../common/consts/size";
import SendMoneyHeader from "./SendMoneyHeader";

export default function SendMoney() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar translucent barStyle={"light-content"} />
        <SendMoneyHeader />
        <Input
          containerStyles={styles.inputContainer}
          inputStyle={styles.input}
          inputProps={{
            placeholder: "Search",
          }}
        />
        <Text style={styles.whatText}>What would you like to do?</Text>
        <View style={styles.overallCont}>
          <TouchableOpacity
            style={styles.cardCont}
            onPress={() => {
              navigation.navigate("SendMoneyAddReceipient");
            }}
          >
            <View style={styles.circle}>
              <Image
                source={require("../../../assets/img/wallet.png")}
                style={styles.wallet}
              />
            </View>
            <Text style={styles.sendText}>Send Money</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.cardCont,
              {
                marginLeft: "7%",
                backgroundColor: "transparent",
              },
            ]}
          >
            <View style={[styles.circle]}>
              <Image
                source={require("../../../assets/img/wallet.png")}
                style={styles.wallet}
              />
            </View>
            <Text
              style={[
                styles.sendText,
                {
                  color: colors.darkGray,
                },
              ]}
            >
              Request Money
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginTop: -30,
    paddingHorizontal: spacingSizes.large,
  },
  input: {
    borderWidth: 0,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  whatText: {
    fontFamily: fontFamilies.RM,
    alignSelf: "center",
    fontSize: fontSizes.large,
    marginTop: spacingSizes.large,
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  wallet: {
    height: 20,
    resizeMode: "contain",
    width: 20,
  },
  cardCont: {
    justifyContent: "center",
    alignItems: "center",
    width: "46%",
    backgroundColor: colors.termsBlue,
    paddingVertical: spacingSizes.xlarge,
    borderRadius: 20,
  },
  overallCont: {
    flexDirection: "row",
    paddingHorizontal: spacingSizes.large,
    marginTop: spacingSizes.larger,
  },
  sendText: {
    color: colors.white,
    marginTop: spacingSizes.large,
    fontFamily: fontFamilies.RM,
    fontSize: fontSizes.normal,
  },
});
