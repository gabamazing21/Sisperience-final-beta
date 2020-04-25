import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";

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
          source={require("../../../assets/images/background3.png")}
        >
          <ScrollView>
            <View style={styles.view1}>
              <View style={styles.view2}>
                <Image
                  source={require("../../../assets/images/logo.png")}
                  style={{ width: 207, height: 113 }}
                />
              </View>
              <Text style={styles.text1}>SELECT YOUR CATEGORY</Text>
              <TouchableOpacity
                style={[styles.btnStyle, { backgroundColor: "#8A0095" }]}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  Trainer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Register");
                }}
                style={[
                  styles.btnStyle,
                  { backgroundColor: "#4600B2", marginTop: 35 },
                ]}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  Customer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnStyle,
                  { backgroundColor: "#FFB300", marginTop: 35 },
                ]}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  Admin
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
  text1: {
    color: "#fff",
    width: "65%",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 80,
  },
  view1: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingBottom: 40,
  },
  view2: {
    marginVertical: 15,
    marginBottom: 60,
    alignSelf: "center",
  },
  btnStyle: {
    width: "80%",
    alignSelf: "center",
    borderRadius: 30,
    alignItems: "center",
    height: 60,
    justifyContent: "center",
  },
});
