import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserRegister from "../../screens/users/Register";
import UserSignIn from "../../screens/users/SignIn";
import UserAppNavigator from "./UserAppNavigator";

const Stack = createStackNavigator();

function UserAuthStack() {
  return (
    <Stack.Navigator initialRouteName="UserSignIn" headerMode="none">
      <Stack.Screen name="UserRegister" component={UserRegister} />
      <Stack.Screen name="UserSignIn" component={UserSignIn} />
      <Stack.Screen name="UserAppNavigator" component={UserAppNavigator} />
    </Stack.Navigator>
  );
}

export default UserAuthStack;
