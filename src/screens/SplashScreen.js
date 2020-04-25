import React, { Component } from "react";
import { View, StyleSheet, Animated, ImageBackground } from "react-native";
import { CommonActions } from "@react-navigation/native";

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.4);
  }

  UNSAFE_componentWillMount() {
    this.spring();
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "CategorySelect" }],
        })
      );
    }, 2000);
  }

  spring() {
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: " rgba(0, 0, 0, 1)" }}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          source={require("../assets/images/backgroundSplashscreen.png")}
        >
          <View
            style={{
              backgroundColor: " rgba(0, 0, 0, 0.7)",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginVertical: 10,
                alignSelf: "center",
              }}
            >
              <Animated.Image
                style={{
                  width: 285,
                  height: 155,
                  resizeMode: "contain",
                  transform: [{ scale: this.springValue }],
                }}
                source={require("../assets/images/logo.png")}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
    s;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
