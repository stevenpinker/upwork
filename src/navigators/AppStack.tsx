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
      <Stack.Screen name="ShowQR" component={ShowQR} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
      <Stack.Screen name="OtpCode" component={OtpCode} />
      <Stack.Screen name="MyCode" component={MyCode} />
      <Stack.Screen name="ChopseYourPlan" component={ChooseYourPlan} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangeMobileNumber" component={ChangeMobileNumber} />
      <Stack.Screen name="PrepaidCard" component={PrepaidCard} />
      <Stack.Screen name="ApplyPrepaidCard" component={ApplyGPoint} />
      <Stack.Screen name="AddGPoint" component={AddGPoint} />
      <Stack.Screen name="BottomTab" component={BottomNavigationTab} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethod} />

      <Stack.Screen name="SendMoneyAddReceipient" component={SendMoneyAddReceipient} />
      <Stack.Screen name="ReviewSend" component={ReviewSend} />
      <Stack.Screen name="PaySend" component={Pay} />
      <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful} />

      <Stack.Screen name="AddGPointPrepaid" component={AddGPointPrepaid} />
      <Stack.Screen name="BusinessAccount" component={BusinusAccount} />
      <Stack.Screen name="AddRecipient" component={AddRecipient} />
    </Stack.Navigator>
  );
}
