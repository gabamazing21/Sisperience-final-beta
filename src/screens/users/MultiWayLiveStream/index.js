import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

export default class DiscoverYourPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              width: "95%",
              height: 224,
              alignSelf: "center",
              marginTop: 60,
            }}
          >
            <Image
              style={{ height: 216, width: "100%" }}
              resizeMode="contain"
              source={require("../../../assets/images/multiwayClass.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 28,
              color: "#262628",
              width: "88%",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            Jack, Alex and Jasmine are on multi-way live call. Do you want to
            join?
          </Text>
          <TouchableOpacity style={{ marginTop: 110, marginBottom: 60 }}>
            <Text
              style={{
                fontSize: 30,
                color: "#FFB300",
                textDecorationLine: "underline",
                alignSelf: "center",
              }}
            >
              Join multi-way live class
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
