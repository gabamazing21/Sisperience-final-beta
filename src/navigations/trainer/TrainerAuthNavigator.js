import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TrainerRegister from "../../screens/trainer/Register";
import TrainerSignIn from "../../screens/trainer/SignIn";
import TrainerAppNavigator from "./TrainerAppNavigator";

const Stack = createStackNavigator();

function TrainerAuthStack() {
  return (
    <Stack.Navigator initialRouteName="TrainerSignIn" headerMode="none">
      <Stack.Screen
        name="TrainerAppNavigator"
        component={TrainerAppNavigator}
      />
      <Stack.Screen name="TrainerRegister" component={TrainerRegister} />
      <Stack.Screen name="TrainerSignIn" component={TrainerSignIn} />
    </Stack.Navigator>
  );
}

export default TrainerAuthStack;
