import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserBottomTabNavigator from "./UserBottomTabNavigator";
import HelpAndSupport from "../../screens/users/HelpAndSupport";
import Congratulation from "../../screens/users/Congratulation";
import UserEditProfile from "../../screens/users/EditProfile";
import Payment from "../../screens/users/Payment";
import Payment2 from "../../screens/users/payment2";
import AddToCart from "../../screens/users/AddToCart";
import TransactionHistory from "../../screens/users/TransactionHistory";
import DiscoverYourPage from "../../screens/users/DiscoverYourPage";
import DiscoverYourPage2 from "../../screens/users/DiscoverYourPage2";
import LiveVedioCall from "../../screens/users/LiveCall";
import LiveDanceDonation from "../../screens/users/LiveDanceWorkshopDonation";
import Signin from "../../screens/users/SignIn";
import Register from "../../screens/users/Register";
import Profile from "../../screens/users/Profile";
import SelectCategory from "../../screens/users/SelectCategory";
import UserCode from "../../screens/users/UserCodeFreeClasses";
import WithdrawFunds from "../../screens/users/WithdrawFunds";
import WithdrawCongrats from "../../screens/users/WithdrawFundsCongrats";
import MyWallet from "../../screens/users/MyWallet";
import LiveClass from "../../screens/users/LiveClass";
import MultiLiveClass from "../../screens/users/MultiWayLiveStream";

const Stack = createStackNavigator();

function UserAuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="UserBottomTabNavigator"
      headerMode="none"
    >
      <Stack.Screen
        name="UserBottomTabNavigator"
        component={UserBottomTabNavigator}
      />
      <Stack.Screen name="LiveDanceDonation" component={LiveDanceDonation} />
      <Stack.Screen name="SelectCategory" component={SelectCategory} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <Stack.Screen name="Congratulation" component={Congratulation} />
      <Stack.Screen name="UserEditProfile" component={UserEditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Payment2" component={Payment2} />
      <Stack.Screen name="AddToCart" component={AddToCart} />
      <Stack.Screen name="UserCode" component={UserCode} />
      <Stack.Screen name="WithdrawFunds" component={WithdrawFunds} />
      <Stack.Screen name="WithdrawCongrats" component={WithdrawCongrats} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen name="LiveVedioCall" component={LiveVedioCall} />
      <Stack.Screen name="DiscoverYourPage" component={DiscoverYourPage} />
      <Stack.Screen name="DiscoverYourPage2" component={DiscoverYourPage2} />
      <Stack.Screen name="MyWallet" component={MyWallet} />
      <Stack.Screen name="LiveClass" component={LiveClass} />
      <Stack.Screen name="MultiLiveClass" component={MultiLiveClass} />
    </Stack.Navigator>
  );
}

export default UserAuthStack;
