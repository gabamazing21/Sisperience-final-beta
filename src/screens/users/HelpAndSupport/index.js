import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { submitReportAndSuggestion } from "../../../redux/actions/userActions";
import { reportInputValidation } from "../../../utilities/validation";
import Loader from "../../../components/Loader";
import ImagePicker from "react-native-image-crop-picker";
import GlobalHeader from "../../../components/GlobalHeader";

class HelpAndSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      description: "",
      selectedImage: null,
      validation_error: null,
      isLoading: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading !== this.state.isLoading) {
      this.setState({
        isLoading: nextProps.isLoading,
      });
    }
  }

  handleOnSelectImage = () => {
    ImagePicker.openPicker({
      cropping: false,
    })
      .then((response) => {
        this.setState({
          selectedImage: {
            ...response,
            name: response.path.substring(
              response.path.indexOf("react-native-image-crop-picker") + 31
            ),
          },
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  handleOnSubmit = () => {
    const { type, description, selectedImage } = this.state;

    const { is_error, validation_error } = reportInputValidation({
      type,
      description,
      selectedImage,
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
          this.props.submitReportAndSuggestion({
            type,
            description,
            selectedImage,
          });
        }
      );
    }
  };

  render() {
    const { selectedImage, isLoading, validation_error } = this.state;

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
          headingText="Help & Support"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <Text style={{ fontSize: 20, marginHorizontal: 50, marginTop: 20 }}>
            Report a problem:
          </Text>
          {selectedImage?.uri && (
            <Image
              source={require("../../../assets/images/background1.png")}
              height={200}
              width={300}
            />
          )}
          <View style={styles.viewPickerselect}>
            <RNPickerSelect
              placeholder={{
                label: "Select your issue type...",
                value: this.state.type,
                color: "rgba(181, 177, 177, 0.5)",
              }}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              onValueChange={(value) =>
                this.setState({
                  type: value,
                })
              }
              items={[
                { label: "Need guide to app", value: "videocall" },
                { label: "video or live secession", value: "livecall" },
                { label: "Inappropriate usage", value: "inappropriate" },
                { label: "Training issue", value: "problemEntity" },
                { label: "Other", value: "other" },
              ]}
            />
          </View>
          <View style={{ width: "75%", alignSelf: "center" }}>
            {validation_error?.type && (
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                }}
              >
                {validation_error.type}
              </Text>
            )}
          </View>
          <Text style={{ fontSize: 20, marginHorizontal: 50, marginTop: 25 }}>
            Description:
          </Text>
          <TextInput
            multiline={true}
            placeholder="Briefly describe your problem...."
            placeholderTextColor="rgba(181, 177, 177, 0.6)"
            style={{
              marginHorizontal: 40,
              backgroundColor: "#fff",
              borderRadius: 13,
              height: 250,
              fontSize: 16,
              marginVertical: 16,
              padding: 15,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
            }}
            onChangeText={(text) => this.setState({ description: text })}
          />

          <View style={{ width: "75%", alignSelf: "center" }}>
            {validation_error?.description && (
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                }}
              >
                {validation_error.description}
              </Text>
            )}
          </View>

          <Text style={{ fontSize: 20, marginHorizontal: 50, marginTop: 15 }}>
            Attach an image:
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "rgba(199, 198, 201, 1)",
              borderRadius: 4,
              marginVertical: 15,
              marginHorizontal: 50,
              paddingVertical: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => this.handleOnSelectImage()}
          >
            <FontAwesome name="camera" size={23} color="#fff" />
            <Text style={{ color: "#F8F3FF", fontSize: 15, marginLeft: 10 }}>
              {selectedImage?.name ? selectedImage.name : "Upload Image"}
            </Text>
          </TouchableOpacity>
          <View style={{ width: "75%", alignSelf: "center" }}>
            {validation_error?.selectedImage && (
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                }}
              >
                {validation_error.selectedImage}
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.btnDone}
            onPress={() => this.handleOnSubmit()}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#A700A7", "#4100B2"]}
              style={styles.linearGradient}
            >
              <Text style={{ color: "#fff", fontSize: 15 }}>DONE</Text>
            </LinearGradient>
          </TouchableOpacity>
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
  linearGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  btnDone: {
    marginHorizontal: 50,
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
  },
  viewPickerselect: {
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 13,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 25,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: 230,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 25,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: 230,
    alignSelf: "center",
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const mapStateToProps = (state) => ({
  isLoading: state.userReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  submitReportAndSuggestion: bindActionCreators(
    submitReportAndSuggestion,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelpAndSupport);
