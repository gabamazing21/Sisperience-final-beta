import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

export default class TestHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: " rgba(0, 0, 0, 1)" }}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          source={require("../../../assets/images/backgroundSplashscreen.png")}
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
              <Image
                source={require("../../../assets/images/logo.png")}
                style={{ width: 285, height: 155 }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
