import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import GlobalHeader from "../../../components/GlobalHeader";

export default class UserProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GlobalHeader
          // Search={true}
          // Drawer={true}
          backgroundColor="#4600B2"
          // elevation={10}
          color="#fff"
          fontSize={20}
          arrow={true}
          BackIconColor="#fff"
          headingText="Dashboard"
          navigation={this.props.navigation}
        />
        <ScrollView></ScrollView>
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
