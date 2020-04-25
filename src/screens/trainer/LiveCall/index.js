import React, { Component } from "react";
import { NodeCameraView } from "react-native-nodemediaclient";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const deviceWidth = Dimensions.get("window").width;

const settings = {
  camera: { cameraId: 1, cameraFrontMirror: true },
  audio: { bitrate: 32000, profile: 1, samplerate: 44100 },
  video: {
    preset: 24,
    bitrate: 400000,
    profile: 2,
    fps: 30,
    videoFrontMirror: true,
  },
};

export default class LiveCall extends Component {
  state = {
    isPublishing: false,
    userComment: "",
    hasPermission: false,
    videoButton: false,
    mikeButton: false,
    isBackCamera: false,
  };

  handleOnSwitchCamera = () => {
    this.setState({ isBackCamera: !this.state.isBackCamera }, () => {
      this.vb.switchCamera();
    });
  };

  onPressAdminBtn = async () => {
    const { admin: adminState, hasPermission } = this.state;
    this.setState({ admin: !adminState });
    if (!adminState) {
      if (Platform.OS === "android") {
        if (!hasPermission) {
          await this.checkPermissions();
        }
      }
    }
  };

  onBuffer = (buffer) => {
    console.log("onBuffer: ", buffer);
  };

  onError = (error) => {
    console.log("onError: ", error);
  };

  checkPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      let hasAllPermissions = true;
      Object.keys(granted).forEach((key) => {
        if (granted[key] !== "granted") {
          console.log("Does not have permission for: ", granted[key]);
          hasAllPermissions = false;
        }
      });
      console.log("hasAllPermissions: ", hasAllPermissions);
      this.setState({ hasPermission: hasAllPermissions });
    } catch (err) {
      console.warn(err);
    }
  };

  onPressPublishBtn = async () => {
    const { isPublishing: publishingState, hasPermission } = this.state;
    if (Platform.OS === "android") {
      if (!hasPermission) {
        this.checkPermissions();
        return;
      }
    }

    if (publishingState) {
      this.vb.stop();
    } else {
      this.vb.start();
    }

    this.setState({ isPublishing: !publishingState });
  };

  render() {
    const { isPublishing, hasPermission, isBackCamera } = this.state;

    if (Platform.OS === "android" && !hasPermission) {
      this.checkPermissions();
    }

    return (
      <View style={styles.container}>
        <NodeCameraView
          style={styles.nodeCameraView}
          ref={(vb) => {
            this.vb = vb;
          }}
          outputUrl="rtmp://live.mux.com/app/6cb6d1f5-f440-e96f-e11c-65b2a09e3e65"
          camera={settings.camera}
          audio={settings.audio}
          video={settings.video}
          autopreview
        />
        <View
          style={{
            position: "absolute",
            top: 20,
            right: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            width: 70,
          }}
        >
          <TouchableOpacity onPress={this.handleOnSwitchCamera}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/icons/icon-changeable-camera.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/icons/icon-chat.png")}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.onPressPublishBtn}>
          <View style={styles.goLive}>
            <Text style={styles.btnText}>
              {isPublishing ? "END LIVE" : "GO LIVE"}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.viewButtonRow}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => {
              this.setState({ videoButton: !this.state.videoButton }, () => {
                this.vb.stopPreview();
              });
            }}
          >
            {this.state.videoButton ? (
              <Feather name="video-off" size={23} color="blue" />
            ) : (
              <Feather name="video" size={23} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => {
              this.setState({ mikeButton: !this.state.mikeButton });
            }}
          >
            {this.state.mikeButton ? (
              <FontAwesome5 name="microphone-slash" size={23} color="blue" />
            ) : (
              <FontAwesome5 name="microphone" size={23} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles}>
            <FontAwesome5 name="user-tie" size={23} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles}>
            <FontAwesome5 name="phone" size={23} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.viewChatRow}>
          <TextInput
            placeholder="Write something...."
            style={styles.inputStyles}
          />
          <TouchableOpacity style={{ marginHorizontal: 10 }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/icons/emoji1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/icons/emoji2.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
  },
  inputStyles: {
    width: 200,
    height: 32,
    fontSize: 15,
    paddingVertical: 0,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  viewChatRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "83%",
    alignSelf: "center",
    marginTop: 18,
    marginBottom: 50,
  },
  viewButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "88%",
    alignSelf: "center",
  },
  buttonStyles: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  nodeCameraView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  goLive: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#d1a667",
    borderColor: "#d1a667",
    borderWidth: 3,
    borderRadius: 2,
    height: 50,
    width: deviceWidth / 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 4,
    marginVertical: 10,
  },
  adminBtnContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 30,
    marginTop: 60,
  },
  adminBtn: {
    backgroundColor: "#006D9E",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 4,
  },
  btnText: { color: "#FFF", fontSize: 18 },
});
