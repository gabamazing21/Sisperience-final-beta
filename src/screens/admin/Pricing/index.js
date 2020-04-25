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

import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

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
          headingText="Pricing"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={{ width: "75%", alignSelf: "center" }}>
            <Text style={{ color: "#070707", fontSize: 20, marginTop: 40 }}>
              Personal Details
            </Text>
            <View style={styles.lineBar} />
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "60%" }}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <FontAwesome name="user" size={20} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: "#707070" }}>
                      Username:
                    </Text>
                    <Text style={{ fontSize: 15, top: -2 }}>John</Text>
                  </View>
                </View>

                <View style={[styles.view1, { marginVertical: 10 }]}>
                  <FontAwesome name="phone-square" size={20} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: "#707070" }}>
                      Phone Number
                    </Text>
                    <Text style={{ fontSize: 15, top: -2 }}>123 456 7890</Text>
                  </View>
                </View>

                <View style={styles.view1}>
                  <MaterialCommunityIcons name="email" size={20} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: "#707070" }}>
                      Email
                    </Text>
                    <Text style={{ fontSize: 15, top: -2 }}>
                      sheikh@yahoo.com
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ width: "40%" }}>
                <Image
                  source={require("../../../assets/images/userProfile.png")}
                  style={{
                    width: 86,
                    height: 86,
                    alignSelf: "flex-end",
                    top: -5,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("EditProfile");
              }}
              style={styles.btn1}
            >
              <FontAwesome name="edit" size={17} color="#090909" />
              <Text style={{ fontSize: 11, marginLeft: 5, color: "#090909" }}>
                Edit Profile
              </Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 20, color: "#070707" }}>General</Text>
            <View style={[styles.lineBar, { marginBottom: 10 }]} />
            <View style={styles.view1}>
              <Feather name="globe" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, color: "#707070" }}>Language</Text>
                <Text style={{ fontSize: 15, top: -2 }}>English</Text>
              </View>
            </View>

            <View style={[styles.view1, { marginTop: 10 }]}>
              <Entypo
                name="location-pin"
                size={25}
                style={{ marginLeft: -5, right: -3 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, color: "#707070" }}>Location</Text>
                <Text style={{ fontSize: 15, top: -2 }}>Nigeria</Text>
              </View>
            </View>

            <Text style={{ fontSize: 20, color: "#070707", marginTop: 15 }}>
              Other
            </Text>
            <View style={[styles.lineBar, { marginBottom: 10 }]} />
            <TouchableOpacity
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginLeft: 4,
              }}
            >
              <FontAwesome name="dollar" size={20} />
              <Text style={{ fontSize: 15, color: "#010101", marginLeft: 14 }}>
                Private Class Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginVertical: 15,
              }}
            >
              <FontAwesome name="barcode" size={20} />
              <Text style={{ fontSize: 15, color: "#010101", marginLeft: 10 }}>
                Code Generator
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center", flexDirection: "row" }}
            >
              <FontAwesome5 name="business-time" size={20} />
              <Text style={{ fontSize: 15, color: "#010101", marginLeft: 10 }}>
                Trainer Analytics
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 50, flexDirection: "row", marginBottom: 20 }}
            >
              <Image
                source={require("../../../assets/icons/logout.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>Sign Out</Text>
            </TouchableOpacity>
          </View>
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
  btn1: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  lineBar: {
    width: "110%",
    left: "-5%",
    borderWidth: 0.7,
    borderColor: "#707070",
    opacity: 0.3,
    marginTop: 13,
    marginBottom: 17,
  },
  view1: {
    alignItems: "center",
    flexDirection: "row",
  },
});
