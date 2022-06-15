import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
} from "react-native";
import { useState } from "react";
import React from "react";
import { fontSizes } from "../consts/size";
import colors from "../consts/colors";
import { PlanModalMenuItem } from "../consts/types";

export default function ModalComponent(props: {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  title?: string;
  menuItems?: PlanModalMenuItem[];
}) {
  const { modalVisible, setModalVisible, title, menuItems } = props;

  return (
    <View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalCenteredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{title}</Text>

            {menuItems?.map((menuItem, index) => {
              return (
                <TouchableOpacity
                  key={`${menuItem.title}${index}`}
                  style={styles.selectModalItem}
                  onPress={() => {
                    if (menuItem.onPress) {
                      menuItem.onPress();
                    }
                  }}
                >
                  <Text style={styles.textStyle}>{menuItem.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${colors.black}00055`,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
    paddingBottom: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  selectModalItem: {
    paddingHorizontal: 24,
    borderRadius: 5,
    paddingVertical: 10,
  },

  textStyle: {
    color: "black",
    textAlign: "left",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 14,
    fontWeight: "bold",
    fontSize: fontSizes.large,
  },
});
