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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../../redux/actions/authActions";

class AdminProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <GlobalHeader
          backgroundColor="#4600B2"
          color="#fff"
          fontSize={20}
          arrow={false}
          BackIconColor="#fff"
          headingText="Profile"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={{ width: "75%", alignSelf: "center" }}>
            <Text style={{ color: "#070707", fontSize: 20, marginTop: 40 }}>
              Personal Details
            </Text>
            <View style={styles.lineBar} />
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: "60%",
                }}
              >
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <FontAwesome name="user" size={20} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: "#707070" }}>
                      Username:
                    </Text>
                    <Text style={{ fontSize: 15, top: -2 }}>
                      {user?.user_name}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginVertical: 10,
                  }}
                >
                  <FontAwesome name="phone-square" size={20} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: "#707070" }}>
                      Phone Number
                    </Text>
                    <Text style={{ fontSize: 15, top: -2 }}>
                      {user?.phone_number ? user.phone_number : "123-456-789"}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons name="email" size={20} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: "#707070" }}>
                      Email
                    </Text>
                    <Text style={{ fontSize: 15, top: -2 }}>{user?.email}</Text>
                  </View>
                </View>
              </View>
              <View style={{ width: "40%" }}>
                <Image
                  source={
                    user?.photoURL
                      ? { uri: user.photoURL }
                      : require("../../../assets/images/guest_profile.png")
                  }
                  style={{
                    width: 86,
                    height: 86,
                    alignSelf: "flex-end",
                    top: -5,
                    borderRadius: 43,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("EditProfile");
              }}
              style={{
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <FontAwesome name="edit" size={17} color="#090909" />
              <Text style={{ fontSize: 11, marginLeft: 5, color: "#090909" }}>
                Edit Profile
              </Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 20, color: "#070707" }}>General</Text>
            <View style={[styles.lineBar, { marginBottom: 10 }]} />
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Feather name="globe" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, color: "#707070" }}>Language</Text>
                <Text style={{ fontSize: 15, top: -2 }}>
                  {" "}
                  {user?.language ? user.language : "English"}
                </Text>
              </View>
            </View>

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Entypo
                name="location-pin"
                size={25}
                style={{ marginLeft: -5, right: -3 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, color: "#707070" }}>Location</Text>
                <Text style={{ fontSize: 15, top: -2 }}>
                  {" "}
                  {user?.location ? user.location : "Nigeria"}
                </Text>
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
              onPress={() => this.props.navigation.navigate("CodeGenerator")}
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
              onPress={() => this.props.navigation.navigate("TrainerAnalytics")}
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <FontAwesome5 name="business-time" size={20} />
              <Text style={{ fontSize: 15, color: "#010101", marginLeft: 10 }}>
                Trainer Analytics
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 50, flexDirection: "row", marginBottom: 20 }}
              onPress={() => this.props.logout(this.props.navigation)}
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
  lineBar: {
    width: "110%",
    left: "-5%",
    borderWidth: 0.7,
    borderColor: "#707070",
    opacity: 0.3,
    marginTop: 13,
    marginBottom: 17,
  },
});

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isLoading: state.authReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  logout: bindActionCreators(logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);
