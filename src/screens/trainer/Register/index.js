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
import RectangularInput from "../../../components/RectangularInput";
import GradientButton from "../../../components/GradientButton";
import { registerInputValidation } from "../../../utilities/validation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { registerUser } from "../../../redux/actions/authActions";
import Loader from "../../../components/Loader";

class TrainerRegistration extends Component {
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
    const { user_name, email, password } = this.state;

    const { is_error, validation_error } = registerInputValidation({
      user_name,
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
          this.props.registerUser(
            { user_name, email, password, user_type: "trainer" },
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
      user_name,
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
          source={require("../../../assets/images/background1.png")}
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
            <View
              style={{
                width: "93%",
                alignSelf: "center",
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 34,
                  width: "80%",
                  alignSelf: "center",
                  marginVertical: 35,
                  color: "#fff",
                }}
              >
                Register
              </Text>
              <View
                style={{ width: "80%", alignSelf: "center", marginBottom: 25 }}
              >
                <RectangularInput
                  title="Username"
                  titleColor="#FFF"
                  placeholder="Enter username"
                  name="user_name"
                  value={user_name}
                  onChangeText={this.handleOnChangeText}
                  error_message={validation_error?.user_name}
                />
              </View>
              <View
                style={{ width: "80%", alignSelf: "center", marginBottom: 25 }}
              >
                <RectangularInput
                  titleColor="#FFF"
                  title="Email"
                  name="email"
                  value={email}
                  onChangeText={this.handleOnChangeText}
                  placeholder="Enter email address"
                  error_message={validation_error?.email}
                />
              </View>
              <View
                style={{ width: "80%", alignSelf: "center", marginBottom: 44 }}
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
              {server_error && (
                <View
                  style={{
                    width: "80%",
                    alignSelf: "center",
                    marginVertical: 15,
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
              <GradientButton title="SIGN UP" onPress={this.handleOnPress} />
              <Text
                style={{
                  marginBottom: 25,
                  marginTop: 45,
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
                  marginBottom: 30,
                }}
              >
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/icons/facebook.png")}
                    style={{ height: 20, width: 11 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/icons/twitter.png")}
                    style={{ height: 20, width: 25 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/icons/google.png")}
                    style={{ height: 21, width: 21 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "82%",
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
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TrainerSignIn")}
              >
                <Text
                  style={{
                    color: "#fff",
                    marginLeft: 5,
                    fontSize: 15,
                    textDecorationLine: "underline",
                  }}
                >
                  Sign In
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
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isLoading: state.authReducer.isLoading,
  isError: state.authReducer.isError,
  errorMessage: state.authReducer.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: bindActionCreators(registerUser, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerRegistration);
