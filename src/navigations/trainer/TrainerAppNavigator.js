import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TrainerBottomTabNavigator from "./TrainerBottomTabNavigator";

import HelpAndSupport from "../../screens/users/HelpAndSupport";
// Trainer Screen
import RegisterTrainer from "../../screens/trainer/Register";
import SigninTrainer from "../../screens/trainer/SignIn";
import StartLiveClass from "../../screens/trainer/StartLiveClass";
import ProfileTrainer from "../../screens/trainer/Profile";
import MyWallet from "../../screens/trainer/MyWallet";
import LiveCall from "../../screens/trainer/LiveCall"; // This is incoming
import EditProfile from "../../screens/users/EditProfile"; // This is incoming
import WithDrawFund from "../../screens/users/WithdrawFunds";

const Stack = createStackNavigator();

function TrainerAuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="TrainerBottomTabNavigator"
      headerMode="none"
    >
      <Stack.Screen
        name="TrainerBottomTabNavigator"
        component={TrainerBottomTabNavigator}
      />

      {/* Trainer Screens */}
      <Stack.Screen name="RegisterTrainer" component={RegisterTrainer} />
      <Stack.Screen name="SigninTrainer" component={SigninTrainer} />
      <Stack.Screen name="StartLiveClass" component={StartLiveClass} />
      <Stack.Screen name="ProfileTrainer" component={ProfileTrainer} />
      <Stack.Screen name="MyWallet" component={MyWallet} />
      <Stack.Screen name="EditProfileTrainer" component={EditProfile} />

      <Stack.Screen name="LiveCall" component={LiveCall} />
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />

      <Stack.Screen name="WithDrawFund" component={WithDrawFund} />
    </Stack.Navigator>
  );
}

export default TrainerAuthStack;
