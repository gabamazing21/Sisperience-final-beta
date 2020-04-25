import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminBottomTabNavigator from "./AdminBottomTabNavigator";
// Admin Screen
import ProfileAdmin from "../../screens/admin/Profile";
import Pricing from "../../screens/admin/Pricing";
import CodeGenerator from "../../screens/admin/CodeGenerator";
import TrainerAnalytics from "../../screens/admin/TrainerAnalytics";
import TrainerGraph from "../../screens/admin/TrainerAnalyticsGraph";
import Dashboard1 from "../../screens/admin/Dashboard";
import EditProfile from "../../screens/users/EditProfile"; // this in incoming change

const Stack = createStackNavigator();

function AdminAuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="AdminBottomTabNavigator"
      headerMode="none"
    >
      <Stack.Screen
        name="AdminBottomTabNavigator"
        component={AdminBottomTabNavigator}
      />
      <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} />
      <Stack.Screen name="Pricing" component={Pricing} />
      <Stack.Screen name="CodeGenerator" component={CodeGenerator} />
      <Stack.Screen name="TrainerAnalytics" component={TrainerAnalytics} />
      <Stack.Screen name="TrainerGraph" component={TrainerGraph} />
      <Stack.Screen name="Dashboard1" component={Dashboard1} />
      <Stack.Screen name="EditProfileAdmin" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default AdminAuthStack;
