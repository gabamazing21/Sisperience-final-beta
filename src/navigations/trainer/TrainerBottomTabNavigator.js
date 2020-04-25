import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrainerProfile from "../../screens/trainer/Profile";
import StartLiveClass from "../../screens/trainer/StartLiveClass";
import MyWallet from "../../screens/trainer/MyWallet";

// import UserProfile from "../../screens/trainer/Profile"; //Incoming change
// import MultiWayLiveStream from "../../screens/users/MultiWayLiveStream"; // Incoming change
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function TrainerBottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Profile" component={TrainerProfile} />
      <Tab.Screen name="Go Live" component={StartLiveClass} />
      <Tab.Screen name="My wallet" component={MyWallet} />
      {/* <Tab.Screen name="Profile" component={UserProfile} //  Incoming changes />
      <Tab.Screen name="Live Session" component={StartLiveClass} />
      <Tab.Screen name="Multi-way" component={MultiWayLiveStream} /> */}
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
              <Entypo
                name="wallet"
                size={21}
                color={isFocused ? "#FFB300" : "#262628"}
                // style={{top:-1}}
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
