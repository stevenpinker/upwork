import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Button from "../../../common/components/Button";
import Feather from "react-native-vector-icons/Feather";
import { HEIGHT, WIDTH } from "../../../common/consts/config";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../../common/consts/size";
import colors from "../../../common/consts/colors";
import BackHeader from "../../../common/components/BackHeader";
import Statusbar from "../../../common/components/Statusbar";
import MainScreen from "../../../common/components/MainScreen";
import Input from "../../../common/components/TextInput";
import { useNavigation } from "@react-navigation/native";
import { Alert, Modal } from "react-native";

export default function ServiceAgreement() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Statusbar barStyle={"light-content"}  />
      <BackHeader />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Image
              resizeMode="contain"
              style={styles.modalImageContainer}
              source={require("../../../assets/img/agrementOk.png")}
            />
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>You have now signed</Text>
              <Text style={styles.modalText}>the agreement.</Text>
            </View>
            <TouchableOpacity
              style={styles.modalButtonContainer}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalTextStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Image
        resizeMode="contain"
        style={styles.topOneImage}
        source={require("../../../assets/img/ellipse60.png")}
      />
        <ScrollView>


      <MainScreen title="Agreement" />
      <View style={styles.padding}>
        <View style={styles.dataContainer}>
          <Text style={styles.headingText}>
            I accept the proposal above and I have read, understand, and agree
            to abide by the Terms & Conditions of Services provided by
            GPoint/Master & S Inc.
          </Text>
          <Input
            label="Signature"
            containerStyles={styles.sigContainer}
            inputStyle={styles.sigInput}
            inputProps={{
              multiline: true,
              numberOfLines: 5,
            }}
            labelStyle={styles.signatureText}
          />
          <View style={styles.borderContainer}>
            <View style={styles.borderLineContainer}>
              <Text style={styles.printText}>Print Name</Text>
              <View style={styles.borderLine}></View>
            </View>
            <View style={styles.borderLineContainer}>
              <Text style={styles.printText}>Date</Text>
              <View style={styles.borderLine}></View>
            </View>
            <View style={styles.borderLineContainer}>
              <Text style={styles.printText}>Timestamp</Text>
              <View style={styles.borderLine}></View>
            </View>
          </View>
          <View style={styles.termConditionContainer}>
            <Text style={styles.termConditionText}>Terms & Condition</Text>
            <View style={styles.permissionContainer}>
              <Text style={styles.concellationText}>Permissions</Text>
              <Text style={styles.descriptionText}>
                In partnership with this affiliate business, GPoint will assist
                in facilitating the introduction of GPoint Wallet payment
                solutions via applicable media and marketing. We seek permission
                to cross promote this affiliate business across various
                platforms by utilizing potential copyright material pertaining
                to this business and any related parties.{" "}
              </Text>
            </View>
            <View>
              <Text style={styles.concellationText}>Cancellation</Text>
              <Text style={styles.descriptionText}>
                Please provide a mandatory minimum of two weeks advance notice
                for cancellation or changes to the applicable service package.
                Without this two week notice, your billing cycle will continue
                to renew. Cancellation is only permitted after six consecutive
                months of service. Your Service remains active until the end of
                your billing cycle unless otherwise stated in agreement with
                this company.
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Cancel"
              textStyles={styles.backTitleText}
              transparent
              containerStyles={styles.buttonBack}
              contentContainerStyle={styles.buttonHeight}
              onPress={() => navigation.navigate("ChooseYourPlan")}
            />
            <Button
              onPress={() => setModalVisible(true)}
              title="Accept & Sign"
              textStyles={styles.continueTitleText}
              containerStyles={styles.buttonContinue}
              contentContainerStyle={styles.buttonHeight}
            />
          </View>
        </View>

      </View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  sigContainer: {
   
  },
  sigInput: {
    height: 100,
    backgroundColor: colors.white,
  },
  padding: {
    paddingHorizontal: spacingSizes.large,
  },
  HeadText: {
    fontWeight: "bold",
    fontSize: fontSizes.large,
  },
  dataContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: spacingSizes.large,
    marginVertical: spacingSizes.large,
  },

  price: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: spacingSizes.large,
    backgroundColor: colors.white,
    width: WIDTH / 2,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: spacingSizes.larger,
  },
  priceText: {
    color: colors.deepSafroon,
    fontWeight: "bold",
    fontSize: fontSizes.xlarge,
  },
  discreption: {
    flexDirection: "row",
    marginVertical: spacingSizes.smallMedium,
  },
  discreptionText: {
    fontWeight: "500",
    marginLeft: spacingSizes.small,
    fontSize: fontSizes.medium,
  },
  buttonContainer: {
    paddingHorizontal: spacingSizes.small,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: spacingSizes.large
  },
  buttonBack: {
    width: WIDTH / 3,
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: spacingSizes.small,
    bottom: 0,
  },
  buttonHeight: {
    height: 40,
  },
  buttonContinue: {
    width: WIDTH / 3,
    bottom: 0,
    right: 0,
  },
  backTitleText: {
    fontSize: fontSizes.small,
  },
  continueTitleText: {
    fontSize: fontSizes.small,
  },
  leftImage: {
    position: "absolute",
    width: 273,
    height: 273,
    top: -60,
    left: 160,
  },
  roundImage: {
    position: "absolute",
    width: 188,
    height: 188,
    left: -45,
    bottom: 100,
  },
  topOneImage: {
    position: "absolute",
    width: 199,
    height: 273,
    top: 0,
    left: 220,
  },
  ChildText: {
    marginLeft: spacingSizes.large,
    fontSize: fontSizes.medium,
  },
  headingText: {
    color: colors.black,
    fontSize: fontSizes.tiny,
    lineHeight: 19,
  },
  signatureText: {
    fontSize: fontSizes.small,
    color: colors.black,
    fontWeight: "800",
    marginTop: spacingSizes.mediumLarge,
  },
  borderLine: {
    borderBottomWidth: 0.5,
    borderColor: colors.gray,
    flex: 1,
    marginLeft: spacingSizes.small,
    justifyContent: "flex-end",
  },
  borderLineContainer: {
    flexDirection: "row",
    marginTop: spacingSizes.smallMedium,
  },
  borderContainer: {
    marginTop: spacingSizes.smallMedium,
  },
  permissionContainer: {
    marginVertical: spacingSizes.small,
  },
  concellationText: {
    fontSize: fontSizes.small,
    color: colors.purple,
    fontFamily: fontFamilies.RM,
  },

  descriptionText: {
    fontSize: fontSizes.xtiny,
    fontFamily: fontFamilies.RR,
  },
  termConditionText: {
    color: colors.primaryBlue,
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.RM,
  },
  termConditionContainer: {
    marginTop: spacingSizes.large,
  },
  printText: {
    fontWeight: "500",
    fontSize: fontSizes.medium,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: `${colors.black}00055`,
  },
  modalView: {
    margin: spacingSizes.large,
    backgroundColor: colors.white,
    borderRadius: spacingSizes.large,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    color: colors.primaryBlue,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: spacingSizes.mediumLarge,
    width: "100%",
    fontSize: fontSizes.mediumLarge,
  },
  modalText: {
    textAlign: "center",
    color: colors.black,
    fontSize: fontSizes.mediumLarge,
    fontWeight: "600",
  },
  modalTextContainer: {
    marginBottom: 40,
  },
  modalImageContainer: {
    height: 100,
    width: 100,
    marginVertical: spacingSizes.larger,
  },
  modalButtonContainer: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: `${colors.black}00055`,
  },
});
