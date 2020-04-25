import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import GlobalHeader from "../../../components/GlobalHeader";

export default class StartLiveClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              width: "95%",
              height: 224,
              alignSelf: "center",
              marginTop: 50,
            }}
          >
            <Image
              style={{ height: 240, width: "100%" }}
              resizeMode="contain"
              source={require("../../../assets/images/startLiveClass.png")}
            />
          </View>

          <TouchableOpacity
            style={{ marginTop: 190, marginBottom: 60 }}
            onPress={() => {
              this.props.navigation.navigate("LiveCall");
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#FFB300",
                textDecorationLine: "underline",
                alignSelf: "center",
              }}
            >
              Start the live class
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
  },
});
