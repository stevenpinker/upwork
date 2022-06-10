import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";
import Button from "../../common/components/Button";
import colors from "../../common/consts/colors";
import { WIDTH } from "../../common/consts/config";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../common/consts/size";

export default function AddGPoint() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              resizeMode="contain"
              style={styles.imageContainer}
              source={require("../../assets/img/successfully.png")}
            />
            <Text style={styles.modalText}>
              Your transfer to Wells Fargo was
            </Text>
            <Text style={styles.successfulText}>Successful! </Text>
            <TouchableOpacity
              style={styles.modalButtonContainer}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.headingText}>Add GPoint</Text>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textContent}>
            Transfering from your Wells Fargo account
          </Text>
          <Text style={styles.textGValue}>
            <Text style={styles.gValue}>G</Text>340
          </Text>
          <Text style={styles.textContent}>
            To your personal GPoint Wallet account
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            transparent
            containerStyles={styles.cancleButton}
            title="Cancel"
          />
          <Button
            containerStyles={styles.confirmButton}
            title="Confirm"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    backgroundColor: `${colors.black}00055`,
    justifyContent: "center",
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
  textStyle: {
    color: colors.primaryBlue,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: spacingSizes.mediumLarge,
    width: "100%",
  },
  modalText: {
    textAlign: "center",
    color: colors.black,
    fontSize: fontSizes.normal,
  },
  modalHeadingText: {
    textAlign: "center",
    color: colors.black,
    fontWeight: "500",
    fontSize: fontSizes.mediumLarge,
    marginVertical: spacingSizes.medium,
  },
  imageContainer: {
    height: 200,
    width: 300,
    marginVertical: spacingSizes.medium,
  },
  successfulText: {
    color: colors.primaryBlue,
    fontSize: fontSizes.large,
    marginBottom: spacingSizes.larger,
  },
  modalButtonContainer: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: colors.gray,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancleButton: {
    borderWidth: 1,
    width: WIDTH / 3,
    borderRadius: 5,
    borderColor: colors.darkGray,
  },
  confirmButton: {
    width: WIDTH / 3,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 0.8,
    paddingHorizontal: spacingSizes.large,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: spacingSizes.large,
    padding: spacingSizes.large,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  textContent: {
    color: colors.darkElectricBlue,
    fontSize: fontSizes.small,
  },
  textGValue: {
    color: colors.black,
    marginVertical: spacingSizes.large,
    fontSize: fontSizes.xlarger,
  },
  gValue: {
    fontSize: fontSizes.large,
  },
  headingText: {
    paddingHorizontal: spacingSizes.larger,
    fontSize: fontSizes.large,
    fontFamily: fontFamilies.RM,
    marginBottom: spacingSizes.large,
  },
});
