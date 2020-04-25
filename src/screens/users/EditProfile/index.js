import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import { connect } from "react-redux";
import CircularInput from "../../../components/CircularInput";
import { bindActionCreators } from "redux";
import { editProfile } from "../../../redux/actions/authActions";
import GradientButton from "../../../components/GradientButton";
import { editProfileInputValidation } from "../../../utilities/validation";
import Loader from "../../../components/Loader";
import GlobalHeader from "../../../components/GlobalHeader";

class EditUserProfile extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      phone_number: "",
      email: "",
      location: "",
      old_password: "",
      new_password: "",
      confirm_password: "",
      validation_error: null,
      isLoading: false,
      photoURL: null,
      isPasswordToChange: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading !== this.state.isLoading) {
      this.setState({ isLoading: nextProps.isLoading });
    }
  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({ ...this.props.user });
    }
  }

  handleOnChangeText = (name, text) => {
    this.setState({ [name]: text });
  };

  handleOnPress = () => {
    const {
      user_name,
      phone_number,
      email,
      location,
      new_password,
      old_password,
      confirm_password,
    } = this.state;

    let { is_error, validation_error } = editProfileInputValidation({
      user_name,
      phone_number,
      email,
      location,
    });

    if (
      this.props.user.password &&
      old_password.trim() !== "" &&
      new_password.trim() !== "" &&
      confirm_password.trim() !== ""
    ) {
      if (
        old_password !== this.props.user.password &&
        new_password !== confirm_password
      ) {
        is_error = true;
        validation_error.old_password = "Incorrect Password";
        validation_error.confirm_password = "Password does not match";
        this.state.isPasswordToChange = true;
      } else if (old_password !== this.props.user.password) {
        is_error = true;
        validation_error.old_password = "Incorrect Password";
        this.state.isPasswordToChange = true;
      } else if (new_password !== confirm_password) {
        is_error = true;
        validation_error.confirm_password = "Password does not match";
        this.state.isPasswordToChange = true;
      } else {
        this.state.isPasswordToChange = true;
      }
    } else {
      this.state.isPasswordToChange = false;
    }

    if (is_error) {
      this.setState({
        is_error,
        validation_error,
      });
    } else {
      this.setState(
        {
          is_error,
          validation_error,
        },
        () => {
          this.state.isPasswordToChange
            ? this.props.editProfile(
                { user_name, phone_number, email, location },
                new_password
              )
            : this.props.editProfile(
                { user_name, phone_number, email, location },
                null
              );
        }
      );
    }
  };

  render() {
    const {
      user_name,
      phone_number,
      email,
      location,
      photoURL,
      new_password,
      old_password,
      confirm_password,
      validation_error,
      isLoading,
    } = this.state;
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
          headingText="Edit Profile"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={{ width: "82%", alignSelf: "center" }}>
            <Text
              style={{
                color: "#070707",
                fontSize: 20,
                marginTop: 40,
                marginLeft: 10,
              }}
            >
              Edit Personal Details
            </Text>
            <View style={styles.lineBar} />
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <View style={{ width: "65%" }}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <FontAwesome name="user" size={20} />
                  <CircularInput
                    placeholder="username"
                    name="user_name"
                    value={user_name}
                    onChangeText={this.handleOnChangeText}
                    error_message={validation_error?.user_name}
                  />
                </View>

                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginVertical: 10,
                  }}
                >
                  <FontAwesome name="phone-square" size={20} />
                  <CircularInput
                    placeholder="phone number"
                    name="phone_number"
                    value={phone_number}
                    onChangeText={this.handleOnChangeText}
                    error_message={validation_error?.phone_number}
                  />
                </View>

                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: 5,
                  }}
                >
                  <MaterialCommunityIcons name="email" size={20} />
                  <CircularInput
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChangeText={this.handleOnChangeText}
                    error_message={validation_error?.email}
                  />
                </View>

                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginVertical: 10,
                  }}
                >
                  <Entypo
                    name="location-pin"
                    size={25}
                    style={{ marginLeft: -5, right: -3 }}
                  />
                  <CircularInput
                    placeholder="Location"
                    name="location"
                    value={location}
                    onChangeText={this.handleOnChangeText}
                    error_message={validation_error?.location}
                  />
                </View>
              </View>
              <View style={{ width: "35%" }}>
                <Image
                  source={
                    photoURL
                      ? { uri: photoURL }
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

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 60,
              }}
            >
              <Fontisto name="locked" size={22} style={{ marginLeft: 20 }} />
              <Text style={{ fontSize: 20, color: "#070707", marginLeft: 10 }}>
                Change Password
              </Text>
            </View>
            <View style={[styles.lineBar, { marginBottom: 10 }]} />

            <View
              style={{
                alignSelf: "center",
                width: "60%",
                marginTop: 15,
              }}
            >
              <TextInput
                placeholder="Old Password"
                style={styles.textInputPass}
                secureTextEntry={true}
                value={old_password}
                onChangeText={(text) =>
                  this.handleOnChangeText("old_password", text)
                }
              />
              {validation_error?.old_password && (
                <Text
                  style={{
                    color: "red",
                    fontSize: 12,
                    marginTop: 2,
                  }}
                >
                  {validation_error?.old_password}
                </Text>
              )}
            </View>
            <View
              style={{
                alignSelf: "center",
                width: "60%",
                marginVertical: 15,
              }}
            >
              <TextInput
                placeholder="New Password"
                style={styles.textInputPass}
                secureTextEntry={true}
                value={new_password}
                onChangeText={(text) =>
                  this.handleOnChangeText("new_password", text)
                }
              />
            </View>
            <View
              style={{
                alignSelf: "center",
                width: "60%",
                marginBottom: 5,
              }}
            >
              <TextInput
                placeholder="Confirm Password"
                style={styles.textInputPass}
                secureTextEntry={true}
                value={confirm_password}
                onChangeText={(text) =>
                  this.handleOnChangeText("confirm_password", text)
                }
              />
              {validation_error?.confirm_password && (
                <Text
                  style={{
                    color: "red",
                    fontSize: 12,
                    marginTop: 2,
                  }}
                >
                  {validation_error?.confirm_password}
                </Text>
              )}
            </View>

            <View
              style={{
                marginVertical: 30,
              }}
            >
              <GradientButton
                title="DONE"
                onPress={() => this.handleOnPress()}
                borderRadius={25}
                width="90%"
              />
            </View>
          </View>
        </ScrollView>
        <Loader isLoading={isLoading} />
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
    width: "100%",
    borderWidth: 0.7,
    borderColor: "#707070",
    opacity: 0.3,
    marginTop: 8,
    marginBottom: 17,
  },
  inputView: {
    marginLeft: 7,
    width: "92%",
    height: 40,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 40,
    paddingVertical: 0,
    fontSize: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textInputPass: {
    width: "100%",
    height: 40,
    fontSize: 15,
    borderRadius: 5,
    marginVertical: 3,
    textAlign: "center",
    paddingVertical: 0,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isLoading: state.authReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  editProfile: bindActionCreators(editProfile, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile);
