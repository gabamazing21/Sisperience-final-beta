import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import RectangularInput from "../../../components/RectangularInput";
import GradientButton from "../../../components/GradientButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginInputValidation } from "../../../utilities/validation";
import {
  loginWithEmailAndPassword,
  // loginWithFacebook,
  loginWithGmail,
} from "../../../redux/actions/authActions";
import Loader from "../../../components/Loader";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      email: "",
      password: "",
      validation_error: null,
      server_error: null,
      is_show_password: false,
      isLoading: false,
    };
  }

  handleOnPress = () => {
    const { email, password } = this.state;

    const { is_error, validation_error } = loginInputValidation({
      email,
      password,
    });

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
          this.props.loginWithEmailAndPassword(
            { email, password },
            this.props.navigation
          );
        }
      );
    }
  };

  handleOnChangeText = (name, text) => {
    this.setState({ [name]: text });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { server_error, isLoading } = this.state;

    if (
      nextProps.errorMessage !== server_error &&
      nextProps.isLoading !== isLoading
    ) {
      this.setState({
        server_error: nextProps.errorMessage,
        isLoading: nextProps.isLoading,
      });
    } else if (nextProps.isLoading !== isLoading) {
      this.setState({
        isLoading: nextProps.isLoading,
      });
    } else if (nextProps.errorMessage !== server_error) {
      this.setState({
        server_error: nextProps.errorMessage,
      });
    }
  }

  render() {
    const {
      email,
      password,
      validation_error,
      server_error,
      isLoading,
    } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: " rgba(0, 0, 0, 1)" }}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require("../../../assets/images/background2.png")}
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
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text
                style={{
                  fontSize: 34,
                  width: "80%",
                  alignSelf: "center",
                  marginVertical: 35,
                  color: "#fff",
                }}
              >
                Sign in
              </Text>
              <View
                style={{ width: "80%", alignSelf: "center", marginBottom: 25 }}
              >
                <RectangularInput
                  titleColor="#FFF"
                  title="Email"
                  placeholder="Enter email address"
                  name="email"
                  value={email}
                  onChangeText={this.handleOnChangeText}
                  error_message={validation_error?.email}
                />
              </View>
              <View
                style={{ width: "80%", alignSelf: "center", marginBottom: 15 }}
              >
                <RectangularInput
                  titleColor="#FFF"
                  title="Password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={this.handleOnChangeText}
                  error_message={validation_error?.password}
                />
              </View>
              <TouchableOpacity>
                <Text
                  style={{
                    width: "80%",
                    alignSelf: "center",
                    textAlign: "right",
                    marginBottom: 55,
                    color: "#fff",
                    fontSize: 15,
                    textDecorationLine: "underline",
                  }}
                >
                  Forgot your password?
                </Text>
              </TouchableOpacity>
              {server_error && (
                <View
                  style={{
                    width: "80%",
                    alignSelf: "center",
                    marginBottom: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "red",
                      fontSize: 12,
                      marginTop: 2,
                    }}
                  >
                    {server_error}
                  </Text>
                </View>
              )}
              <GradientButton
                title="SIGN IN"
                onPress={() => this.handleOnPress()}
              />
              <Text
                style={{
                  marginTop: 40,
                  marginBottom: 25,
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
                  marginBottom: 80,
                }}
              >
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                  <FontAwesome name="facebook" size={20} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                  <AntDesign name="twitter" size={20} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, alignItems: "center" }}
                  onPress={() =>
                    this.props.loginWithGmail("admin", this.props.navigation)
                  }
                >
                  <AntDesign name="google" size={20} color="blue" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "82%",
                height: 50,
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
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("AdminRegister")}
              >
                <Text
                  style={{
                    color: "#fff",
                    marginLeft: 5,
                    fontSize: 15,
                    textDecorationLine: "underline",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
        <Loader isLoading={isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isLoading: state.authReducer.isLoading,
  isError: state.authReducer.isError,
  errorMessage: state.authReducer.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  loginWithEmailAndPassword: bindActionCreators(
    loginWithEmailAndPassword,
    dispatch
  ),
  loginWithGmail: bindActionCreators(loginWithGmail, dispatch),
  // loginWithFacebook: bindActionCreators(loginWithFacebook, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
