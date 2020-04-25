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

export default class DiscoverYourPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GlobalHeader
          // Search={true}
          // Drawer={true}
          // backgroundColor="#4600B2"
          borderBottomLeftRadius={1}
          borderBottomRightRadius={1}
          color="#fff"
          // fontSize={20}
          arrow={true}
          BackIconColor="grey"
          // headingText="Add card"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View
            style={{
              width: "90%",
              height: 224,
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            <Image
              style={{ height: 224, width: "100%" }}
              resizeMode="contain"
              source={require("../../../assets/images/celebration.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 30,
              color: "#262628",
              width: "70%",
              alignSelf: "center",
              marginTop: 40,
            }}
          >
            Thank you for your donation
          </Text>
          <TouchableOpacity style={{ marginTop: 140, marginBottom: 60 }}>
            <Text
              style={{
                fontSize: 30,
                color: "#FFB300",
                textDecorationLine: "underline",
                alignSelf: "center",
              }}
            >
              Get back to Live Session
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
