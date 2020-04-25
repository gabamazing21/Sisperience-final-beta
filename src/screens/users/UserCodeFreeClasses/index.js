import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

export default class DiscoverYourPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/background4.png")}
          style={{ flex: 1 }}
          blurRadius={12}
        >
          <ScrollView>
            <View
              style={{
                backgroundColor: "#5700AF",
                alignSelf: "center",
                width: "98%",
                height: 330,
                borderRadius: 200,
                top: -190,
                alignItems: "center",
              }}
            >
              {/* <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  marginTop: 240,
                  fontWeight: "bold",
                }}
              >
                Congratulations
              </Text> */}

              <Image
                source={require("../../../assets/images/congratsText.png")}
                style={{
                  width: 130,
                  height: 31,
                  marginTop: 230,
                }}
              />
            </View>
            <View
              style={{ flexDirection: "row", alignSelf: "center", right: -20 }}
            >
              <Image
                source={require("../../../assets/images/gift.png")}
                style={{
                  width: 105,
                  height: 95,
                  top: -140,
                }}
              />
              <Image
                source={require("../../../assets/images/stars.png")}
                style={{
                  width: 40,
                  height: 70,
                  top: -160,
                }}
              />
            </View>
            <View style={styles.bottomView}>
              <Text style={{ color: "#D62D2D", fontSize: 34, marginTop: 80 }}>
                XYZ321G
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 40,
                  color: "#262628",
                  fontWeight: "bold",
                  marginBottom: 35,
                }}
              >
                Use the code to get first three classes for free.
              </Text>
              <TouchableOpacity
                style={{
                  width: "65%",
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: "#FFD039",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3,
                }}
              >
                <Text
                  style={{ color: "#262628", fontSize: 15, fontWeight: "bold" }}
                >
                  Save code & Continue
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#262628",
                  marginTop: 25,
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              >
                *Terms & Conditions apply.
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottomView: {
    width: "88%",
    height: 310,
    borderRadius: 20,
    alignItems: "center",
    top: -115,
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
