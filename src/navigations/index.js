import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import CategorySelect from "../screens/CategorySelect";
import AdminAuth from "./admin/AdminAuthNavigator";
import TrainerAuth from "./trainer/TrainerAuthNavigator";
import UserAuth from "./user/UserAuthNavigator";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
      <Stack.Screen name="AdminAuth" component={AdminAuth} />
      <Stack.Screen name="TrainerAuth" component={TrainerAuth} />
      <Stack.Screen name="UserAuth" component={UserAuth} />
      <Stack.Screen name="CategorySelect" component={CategorySelect} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
