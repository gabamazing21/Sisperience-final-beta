import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Video from "react-native-video";
const deviceWidth = Dimensions.get("window").width;

export default class LiveCall extends Component {
  constructor() {
    super();
    this.state = {
      paused: true,
    };
  }
  onPressPlayBtn = () => {
    const { paused: pausedState } = this.state;
    this.setState({ paused: !pausedState });
  };

  render() {
    const { paused } = this.state;
    const source = {
      uri:
        "https://stream.mux.com/u2oMQB01vKfxglIxcEUrz02t5ak02WuGRQkkJrv6X4zxew.m3u8",
    };
    return (
      <View>
        <Video
          source={source}
          ref={(ref) => {
            this.player = ref;
          }}
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.onError} // Callback when video cannot be loaded
          style={styles.nodePlayerView}
          fullscreen={false}
          resizeMode="cover"
          paused={paused}
        />
        <TouchableOpacity
          style={styles.playBtnContainer}
          onPress={this.onPressPlayBtn}
        >
          <View style={styles.playBtn}>
            <Text style={styles.btnText}>{paused ? "PLAY" : "PAUSE"}</Text>
          </View>
        </TouchableOpacity>
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
  nodePlayerView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  playBtn: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#333",
    borderColor: "#333",
    borderWidth: 3,
    borderRadius: 2,
    height: 50,
    width: deviceWidth / 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 4,
    marginVertical: 10,
  },
  playBtnContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    marginVertical: 20,
  },
});
