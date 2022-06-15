import { Icon, Row } from "@growth-ui/native";
import { GrowthICONS } from "@growth-ui/native/types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BackHeader from "../../common/components/BackHeader";
import EllipsesLayout from "../../common/components/EllipsesLayout";
import Statusbar from "../../common/components/Statusbar";
import Input from "../../common/components/TextInput";
import colors from "../../common/consts/colors";
import {
  fontFamilies,
  fontSizes,
  spacingSizes,
} from "../../common/consts/size";

export default function Settings() {
  const cardTwo: {
    name: string;
    icon: GrowthICONS;
    noIcon?: boolean;
    onPress?: () => void;
  }[] = [
    {
      name: "Create Business Account",
      icon: "plus",
    },

    {
      name: "GPoint Prepaid Card",
      icon: "card",
      onPress: () => {
        navigation.navigate("ApplyPrepaidCard");
      },
    },
    {
      name: "Transfer Balance",
      icon: "refresh outline",
      onPress: () => {
        navigation.navigate("AddGPoint");
      },
    },
    {
      name: "Payment Methods",
      icon: "document",
      onPress: () => {
        navigation.navigate("PaymentMethods");
      },
    },
    {
      name: "Pay",
      icon: "folder outline",
      onPress: () => {
        navigation.navigate("PrepaidCard");
      },
    },

    {
      name: "Add Balance",
      icon: "add",
      onPress: () => {
        navigation.navigate("PaymentMethods");
      },
    },
    {
      name: "Scan",
      icon: "qrcode",
      onPress: () => {
        navigation.navigate("ShowQR");
      },
    },
    {
      name: "Find Location",
      icon: "qrcode",
      noIcon: true,
      onPress: () => {
        navigation.navigate("ShowQR");
      },
    },
  ];
  const navigation = useNavigation<any>();
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        <EllipsesLayout />

        <ScrollView>
          <BackHeader />
          <View style={styles.searchContainer}>
            <Input
              label=""
              inputProps={{ placeholder: "Search" }}
              inputStyle={styles.searchInput}
            />
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <TouchableOpacity>
                <Row horizontalAlign="space-between" style={styles.listItem}>
                  <Row>
                    <Icon name={"plus"} color={"gray-900"} />
                    <Text style={styles.itemLabel}>Account</Text>
                  </Row>
                  <Icon name="chevron right"/>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditProfile");
                }}
              >
                <Row horizontalAlign="space-between" style={styles.listItem}>
                  <Row>
                    <Icon
                      name={"plus"}
                      color={"gray-900"}
                      containerStyle={{ opacity: 0 }}
                    />
                    <Text style={styles.itemLabelInner}>Username</Text>
                  </Row>
                  <Icon name="chevron right" />
                </Row>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ChangeMobileNumber");
                }}
              >
                <Row horizontalAlign="space-between" style={styles.listItem}>
                  <Row>
                    <Icon
                      name={"plus"}
                      color={"gray-900"}
                      containerStyle={{ opacity: 0 }}
                    />
                    <Text style={styles.itemLabelInner}>Phone number</Text>
                  </Row>
                  <Icon name="chevron right" />
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row horizontalAlign="space-between" style={styles.listItem}>
                  <Row>
                    <Icon
                      name={"plus"}
                      color={"gray-900"}
                      containerStyle={{ opacity: 0 }}
                    />
                    <Text style={styles.itemLabelInner}>
                      Language Preference
                    </Text>
                  </Row>
                  <Icon name="chevron right" />
                </Row>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                navigation.navigate('ChooseYourPlan')
              }}>
                <Row horizontalAlign="space-between" style={styles.listItem}>
                  <Row>
                    <Icon
                      name={"plus"}
                      color={"gray-900"}
                      containerStyle={{ opacity: 0 }}
                    />
                    <Text style={styles.itemLabelInner}>
                      Choose Plan
                    </Text>
                  </Row>
                  <Icon name="chevron right" />
                </Row>
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
            <View style={styles.card}>
              {cardTwo?.map((cardItem, index) => {
                return (
                  <TouchableOpacity
                    key={`${cardItem.name}${index}`}
                    onPress={() => {
                      if (cardItem.onPress) {
                        cardItem.onPress();
                      }
                    }}
                  >
                    <Row
                      horizontalAlign="space-between"
                      style={styles.listItem}
                    >
                      <Row>
                        <Icon
                          name={cardItem.icon || "plus"}
                          color={"gray-900"}
                          containerStyle={{
                            opacity: !cardItem?.noIcon ? 1 : 0,
                          }}
                        />
                        <Text style={styles.itemLabel}>{cardItem.name}</Text>
                      </Row>
                      <Icon name="chevron right" />
                    </Row>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.divider} />
            <View style={styles.card}>
              <TouchableOpacity>
                <Row horizontalAlign="space-between" style={styles.listItem}>
                  <Row>
                    <Icon name={"help"} color={"gray-900"} />
                    <Text style={styles.itemLabel}>Help</Text>
                  </Row>
                  <Icon name="chevron right" />
                </Row>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PersonalAccount");
                }}
              >
                <Row horizontalAlign="space-between" style={styles.listItem}>
                  <Row>
                    <Icon name={"logout"} color={"gray-900"} />
                    <Text style={styles.itemLabel}>Logout</Text>
                  </Row>
                  <Icon name="chevron right" />
                </Row>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PersonalAccount");
                }}
              >
                <Text style={styles.privacyText}>Privacy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PersonalAccount");
                }}
              >
                <Text style={styles.privacyText}>App Version</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PersonalAccount");
                }}
              >
                <Text style={styles.privacyText}>Update App</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacingSizes.large,
  },
  searchContainer: {
    paddingHorizontal: spacingSizes.large,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: spacingSizes.large,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemLabel: {
    marginLeft: spacingSizes.small,
    fontFamily: fontFamilies.RR,
    fontSize: fontSizes.normal,
  },
  itemLabelInner: {
    marginLeft: spacingSizes.medium,
    fontFamily: fontFamilies.RT,
    fontSize: fontSizes.normal,
  },
  listItem: {
    marginBottom: spacingSizes.smallMedium,
  },
  cardContainer: {
    padding: spacingSizes.large,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: colors.midGray,
    marginVertical: spacingSizes.large,
  },
  privacyText: {
    fontSize: fontSizes.tiny,
    marginVertical: spacingSizes.xsmall,
  },
  searchInput: {
    borderWidth: 0,
    backgroundColor: colors.white,
  },
});
