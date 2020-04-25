import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminRegister from "../../screens/admin/Register";
import AdminSignIn from "../../screens/admin/SignIn";
import AdminAppNavigator from "./AdminAppNavigator";

const Stack = createStackNavigator();

function AdminAuthStack() {
  return (
    <Stack.Navigator initialRouteName="AdminSignIn" headerMode="none">
      <Stack.Screen name="AdminRegister" component={AdminRegister} />
      <Stack.Screen name="AdminSignIn" component={AdminSignIn} />
      <Stack.Screen name="AdminAppNavigator" component={AdminAppNavigator} />
    </Stack.Navigator>
  );
}

export default AdminAuthStack;
