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
import Button from "../../../common/components/Button";
import colors from "../../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../../common/consts/size";

export default function OtpSent(props: {
  visible: boolean;
  setModalVisible: (visible: boolean) => void;
}) {
  const { visible, setModalVisible } = props;
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setModalVisible(false);
        }}
        style={styles.centeredView}
      >
        <View style={styles.modalView}>
          <Image
            resizeMode="contain"
            style={styles.imageContainer}
            source={require("../../../assets/img/msgBox.png")}
          />
          <Text style={styles.modalHeadingText}>
            Check your Phone for a code
          </Text>
          <Text style={styles.modalText}>We have sent a password recover</Text>
          <Text style={styles.modalText}>instruction to your email</Text>
          <Text style={[styles.modalText, styles.textMarginVertical]}>
            Please Check your email to confirm.
          </Text>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.textStyle}>Didn't received the code ?</Text>
          </TouchableOpacity>
          <Button
            title="OK"
            onPress={() => setModalVisible(false)}
            containerStyles={styles.okButton}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacingSizes.large,
    backgroundColor: `${colors.black}00055`,
  },
  modalView: {
    margin: spacingSizes.large,
    backgroundColor: colors.white,
    borderTopLeftRadius: spacingSizes.large,
    borderTopRightRadius: spacingSizes.large,
    borderBottomLeftRadius: spacingSizes.large,
    padding: spacingSizes.larger,
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
    textAlign: "center",
    marginTop: spacingSizes.large,
    fontFamily: fontFamilies.RR,
  },
  modalText: {
    textAlign: "center",
    color: colors.darkElectricBlue,
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.RR,
  },
  modalHeadingText: {
    textAlign: "center",
    color: colors.black,
    fontFamily: fontFamilies.RM,
    fontSize: fontSizes.mediumLarge,
    marginVertical: spacingSizes.medium,
  },
  imageContainer: {
    borderRadius: 75,
    height: 150,
    width: 150,
    marginVertical: spacingSizes.medium,
  },
  textMarginVertical: {
    marginVertical: spacingSizes.small,
  },
  okButton: {
    marginTop: spacingSizes.large,
    width: 100,
  },
});
