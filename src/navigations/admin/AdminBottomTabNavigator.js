import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminProfile from "../../screens/admin/Profile";
import Dashboard from "../../screens/admin/Dashboard";

import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function AdminBottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Profile" component={AdminProfile} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabButtons}
            key={index}
          >
            {index === 0 && (
              <AntDesign
                name="user"
                size={20}
                color={isFocused ? "#FFB300" : "#262628"}
              />
            )}
            {index === 1 && (
              <Image
                source={require("../../assets/icons/dashboard.png")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: isFocused ? "#FFB300" : "#262628",
                }}
              />
            )}

            <Text
              style={{ color: isFocused ? "#FFB300" : "#262628", fontSize: 12 }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
    backgroundColor: "#F2EDED",
    paddingTop: 8,
    height: 60,
  },
  tabButtons: {
    alignItems: "center",
  },
});
