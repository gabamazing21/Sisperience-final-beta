import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProfile from "../../screens/users/Profile";
import LiveDanceWorkshop from "../../screens/users/LiveDanceWorkshop";
import MultiWayLiveStream from "../../screens/users/MultiWayLiveStream";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function UserBottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Profile" component={UserProfile} />
      <Tab.Screen name="Live Session" component={LiveDanceWorkshop} />
      <Tab.Screen name="Multi-way" component={MultiWayLiveStream} />
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
              <MaterialIcons
                name="live-tv"
                size={21}
                color={isFocused ? "#FFB300" : "#262628"}
                style={{ top: -1 }}
              />
            )}
            {index === 2 && (
              <Image
                style={{
                  height: 20,
                  width: 21,
                  tintColor: isFocused ? "#FFB300" : "#262628",
                }}
                source={require("../../assets/icons/icon-multiway-yellow.png")}
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
    paddingTop: 8,
    backgroundColor: "#F2EDED",
    height: 60,
  },
  tabButtons: {
    alignItems: "center",
  },
});
