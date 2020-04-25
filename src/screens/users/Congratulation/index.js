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
              width: "95%",
              height: 224,
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <Image
              style={{ height: 224, width: "100%" }}
              resizeMode="contain"
              source={require("../../../assets/images/congragulations.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 30,
              color: "#262628",
              width: "88%",
              alignSelf: "center",
              marginTop: 35,
            }}
          >
            Wow! you have got the 1 to 1 feature. Now you can take the private
            class.
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
              Go to private session
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
