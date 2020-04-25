import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

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
          style={{ flex: 1 }}
          source={require("../../../assets/images/background1.png")}
        >
          <ScrollView style={{ backgroundColor: " rgba(0, 0, 0, 0.7)" }}>
            <View
              style={{
                marginVertical: 10,
                alignSelf: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/logo.png")}
                style={{ width: 207, height: 113 }}
              />
            </View>
            <View
              style={{
                width: "93%",
                alignSelf: "center",
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 34,
                  width: "80%",
                  alignSelf: "center",
                  marginVertical: 35,
                  color: "#fff",
                }}
              >
                Register
              </Text>
              <View
                style={{ width: "80%", alignSelf: "center", marginBottom: 25 }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    marginBottom: 10,
                  }}
                >
                  Admin
                </Text>
                <View
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: 5,
                  }}
                >
                  <TextInput
                    placeholder="Enter admin"
                    placeholderTextColor="rgba(0, 0, 0, 0.3)"
                    style={{
                      marginVertical: 0,
                      paddingHorizontal: 15,
                      fontSize: 15,
                    }}
                  />
                </View>
              </View>
              <View
                style={{ width: "80%", alignSelf: "center", marginBottom: 25 }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    marginBottom: 10,
                  }}
                >
                  Email
                </Text>
                <View
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: 5,
                  }}
                >
                  <TextInput
                    placeholder="Enter email address"
                    placeholderTextColor="rgba(0, 0, 0, 0.3)"
                    style={{
                      marginVertical: 0,
                      paddingHorizontal: 15,
                      fontSize: 15,
                    }}
                  />
                </View>
              </View>
              <View
                style={{ width: "80%", alignSelf: "center", marginBottom: 44 }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    marginBottom: 10,
                  }}
                >
                  Password
                </Text>
                <View
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: 5,
                  }}
                >
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Enter password"
                    placeholderTextColor="rgba(0, 0, 0, 0.3)"
                    style={{
                      marginVertical: 0,
                      paddingHorizontal: 15,
                      fontSize: 15,
                    }}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: "80%",
                  alignSelf: "center",
                  borderRadius: 5,
                  height: 50,
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#A700A7", "#4100B2"]}
                  style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 15 }}>SIGN UP</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text
                style={{
                  marginBottom: 25,
                  marginTop: 45,
                  alignSelf: "center",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                OR
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "60%",
                  alignSelf: "center",
                  marginBottom: 30,
                }}
              >
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/icons/facebook.png")}
                    style={{ height: 20, width: 11 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/icons/twitter.png")}
                    style={{ height: 20, width: 25 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/icons/google.png")}
                    style={{ height: 21, width: 21 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                // backgroundColor: 'rgba(255, 255, 255, 0.95)',
                width: "82%",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                marginBottom: 20,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 15 }}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("AdminSignIn")}
              >
                <Text
                  style={{
                    color: "#fff",
                    marginLeft: 5,
                    fontSize: 15,
                    textDecorationLine: "underline",
                  }}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
});
