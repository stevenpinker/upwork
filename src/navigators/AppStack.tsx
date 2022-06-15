import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../components/MainPage";
import BusinusAccount from "../components/BusinessAccount";
import ShowQR from "../components/ScanQr";
import CreatePersonalAccount from "../components/CreatePersonalAccount";
import PersonalAccount from "../components/PersonalAccount";
import ChooseYourPlan from "../components/ServiceAgreement";
import SelectAccount from "../components/MainPage/components/SelectAccount";
import ResetPassword from "../components/ResetPassword";
import CreateNewPassword from "../components/CreateNewPassword";
import BottomNavigationTab from "./BottomTabNavigator";
import OtpCode from "../components/OtpCode";
import MyCode from "../components/MyQr";
import Settings from "../components/Settings";
import EditProfile from "../components/EditProfile";
import ChangeMobileNumber from "../components/ChangeMobileNumber";
import PrepaidCard from "../components/PrepaidCardMain";
import ApplyGPoint from "../components/ApplyPrepaidCard";
import AddGPoint from "../components/AddGPoint";
import AddRecipient from "../components/AddRecepient";
import PaymentMethod from "../components/PaymentMethods";
import AddGPointPrepaid from "../components/AddGPointPrepaid";
import SendMoneyAddReceipient from "../components/SendMoneyFlow";
import ReviewSend from "../components/SendMoneyFlow/components/ReviewSend";
import Pay from "../components/SendMoneyFlow/components/Pay";
import PaymentSuccessful from "../components/SendMoneyFlow/components/PaymentSuccessful";
import VipGold from "../components/ServiceAgreement/components/VipGold";
import VipSilver from "../components/ServiceAgreement/components/VipSilver";
import StandardPlatinum from "../components/ServiceAgreement/components/StandardPlatinum";
import StandardGold from "../components/ServiceAgreement/components/StandardGold";
import StandardSilver from "../components/ServiceAgreement/components/StandardSilver";
import StandardBronze from "../components/ServiceAgreement/components/StandardBronze";
import StandardPlatinumRestaurant from "../components/ServiceAgreement/components/StandardPlatinumRestaurant";
import ServiceAgreement from "../components/ServiceAgreement/components/ServiceAgreement";
import StandardGoldServiceProvider from "../components/ServiceAgreement/components/StandardGoldServieProvider";
import StandardGoldHighProfit from "../components/ServiceAgreement/components/StandardGoldHighProfit";
import StandardGoldLowProfit from "../components/ServiceAgreement/components/StandardGoldLowProfit";
import StandardGoldRestaurant from "../components/ServiceAgreement/components/StandardGoldRestaurant";
import StandardSilverRestaurant from "../components/ServiceAgreement/components/StandardSilverRestaurant";
import StandardSilverServiceProvider from "../components/ServiceAgreement/components/StandardSilverServiceProvider";
import StandardSilverLowProfit from "../components/ServiceAgreement/components/StandardSilverLowProfit";
import StandardSilverHighProfit from "../components/ServiceAgreement/components/StandardSilverHighProfit";
import StandardBronzeHighProfit from "../components/ServiceAgreement/components/StandardBronzeHighProfit";
import StandardBronzeLowProfit from "../components/ServiceAgreement/components/StandardBronzeLowProfit";
import StandardBronzeRestaurant from "../components/ServiceAgreement/components/StandardBronzeRestaurant";
import StandardBronzeServiceProvider from "../components/ServiceAgreement/components/StandardBronzeServiceProvider";
import StandardPlatinumServiceProvider from "../components/ServiceAgreement/components/StandardPlatinumServiceProvider";
import StandardPlatinumLowProfit from "../components/ServiceAgreement/components/StandardPlatinumLowProfit";
import StandardPlatinumHighProfit from "../components/ServiceAgreement/components/StandardPlatinumHighProfit";

export default function AppStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="SelectAccount" component={SelectAccount} />
      <Stack.Screen
        name="CreatePersonalAccount"
        component={CreatePersonalAccount}
      />
      <Stack.Screen name="PersonalAccount" component={PersonalAccount} />
      <Stack.Screen name="StandardGoldServiceProvider" component={ StandardGoldServiceProvider} />

      <Stack.Screen name="ShowQR" component={ShowQR} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
      <Stack.Screen name="OtpCode" component={OtpCode} />
      <Stack.Screen name="MyCode" component={MyCode} />
      <Stack.Screen name="ChooseYourPlan" component={ChooseYourPlan} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangeMobileNumber" component={ChangeMobileNumber} />
      <Stack.Screen name="PrepaidCard" component={PrepaidCard} />
      <Stack.Screen name="ApplyPrepaidCard" component={ApplyGPoint} />
      <Stack.Screen name="AddGPoint" component={AddGPoint} />
      <Stack.Screen name="BottomTab" component={BottomNavigationTab} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethod} />
      <Stack.Screen name="VipGold" component={VipGold} />
      <Stack.Screen name="VipSilver" component={VipSilver} />
      <Stack.Screen name="StandardPlatinum" component={StandardPlatinum} />
      <Stack.Screen name="StandardGold" component={StandardGold} />
      <Stack.Screen name="StandardSilver" component={StandardSilver} />
      <Stack.Screen name="StandardBronze" component={StandardBronze} />
      <Stack.Screen name="ServiceAgreement" component={ServiceAgreement} />
      <Stack.Screen name="StandardGoldHighProfit" component={StandardGoldHighProfit} />
      <Stack.Screen name="StandardGoldLowProfit" component={StandardGoldLowProfit} />
      <Stack.Screen name="StandardGoldRestaurant" component={StandardGoldRestaurant} />
      <Stack.Screen name="StandardPlatinumRestaurant" component={StandardPlatinumRestaurant} />
      <Stack.Screen name="StandardSilverRestaurant" component={StandardSilverRestaurant} />
      <Stack.Screen name="StandardSilverServiceProvider" component={StandardSilverServiceProvider} />
      <Stack.Screen name="StandardSilverLowProfit" component={StandardSilverLowProfit} />
      <Stack.Screen name="StandardSilverHighProfit" component={StandardSilverHighProfit} />
      <Stack.Screen name="StandardBronzeLowProfit" component={StandardBronzeLowProfit} />
      <Stack.Screen name="StandardBronzeHighProfit" component={StandardBronzeHighProfit} />
      <Stack.Screen name="StandardBronzeRestaurant" component={StandardBronzeRestaurant} />
      <Stack.Screen name="StandardBronzeServiceProvider" component={StandardBronzeServiceProvider} />
      <Stack.Screen name="StandardPlatinumServiceProvider" component={StandardPlatinumServiceProvider} />
      <Stack.Screen name="StandardPlatinumLowProfit" component={StandardPlatinumLowProfit} />
      <Stack.Screen name="StandardPlatinumHighProfit" component={StandardPlatinumHighProfit} />












      

      <Stack.Screen
        name="SendMoneyAddReceipient"
        component={SendMoneyAddReceipient}
      />
      <Stack.Screen name="ReviewSend" component={ReviewSend} />
      <Stack.Screen name="PaySend" component={Pay} />
      <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful} />

      <Stack.Screen name="AddGPointPrepaid" component={AddGPointPrepaid} />
      <Stack.Screen name="BusinessAccount" component={BusinusAccount} />
      <Stack.Screen name="AddRecipient" component={AddRecipient} />
    </Stack.Navigator>
  );
}
