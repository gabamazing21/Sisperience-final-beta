import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import Video from "react-native-video";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const deviceWidth = Dimensions.get("window").width;

export default class LiveDanceWorkshop extends Component {
  constructor() {
    super();
    this.state = {
      paused: true,
      msgArray: [
        {
          msgId: 1,
          name: "Jasmine Joy",
          img: require("../../../assets/images/videoThumbnail1.png"),
          msgText: "Lovely...",
        },
        {
          msgId: 2,
          name: "Willie Simson",
          img: require("../../../assets/images/videoThumbnail2.png"),
          msgText: "Awesome....:)",
        },
      ],
      defaultMsgs: [
        {
          DefaultMsgText: "Almost there",
        },
        {
          DefaultMsgText: "Reached",
        },
      ],
      chatMsg: "",
    };
  }
  sendMsg = () => {
    let { msgArray, chatMsg } = this.state;
    msgArray.push({
      msgId: 2,
      msgText: chatMsg,
      name: "John Wick",
      img: require("../../../assets/images/videoThumbnail1.png"),
    });
    this.setState({ msgArray, chatMsg: "" });
  };
  sendDefaultMsg = () => {
    let { msgArray, defaultMsgs } = this.state;
    // msgArray.push({msgId:2, msgText: defaultMsgs.DefaultMsgText})
    this.setState({ msgArray, chatMsg: "" });
  };

  onPressPlayBtn = () => {
    const { paused: pausedState } = this.state;
    this.setState({ paused: !pausedState });
  };

  render() {
    const { paused } = this.state;
    const source = {
      uri:
        "https://stream.mux.com/En00lwMHZFJrnBAoDuhsa00gEpwS9Ov00MHiYzPwBO02rmo.m3u8",
    };
    return (
      <View style={styles.container}>
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
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Image
              source={require("../../../assets/images/videoThumbnail3.png")}
              style={{ width: 42, height: 42, borderRadius: 21 }}
            />
            <View style={{ marginLeft: 3 }}>
              <Text style={{ fontSize: 12, color: "#fff" }}>Alleeta Ocean</Text>
              <Text style={{ fontSize: 12, color: "#fff" }}>00:45:45</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <MaterialIcons name="remove-red-eye" size={20} color="#fff" />
            <Text style={{ marginLeft: 3, fontSize: 13, color: "#fff" }}>
              1.5 M
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.playBtnContainer}
          onPress={this.onPressPlayBtn}
        >
          <View style={styles.playBtn}>
            <Text style={styles.btnText}>{paused ? "PLAY" : "PAUSE"}</Text>
          </View>
        </TouchableOpacity>

        {/* Live messages */}
        <View>
          <View
            style={{
              width: "70%",
              height: 120,
              alignSelf: "flex-start",
              marginLeft: "10%",
              bottom: -35,
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
              ref={(ref) => (this.scrollView = ref)}
              onContentSizeChange={(contentWidth, contentHeight) => {
                this.scrollView.scrollToEnd({ animated: true });
              }}
            >
              {this.state.msgArray.map((obj, idx) => {
                if (obj.msgText != "" && obj.msgText != " ") {
                  if (obj.msgId == 1) {
                    return (
                      <View style={styles.viewMsg}>
                        <Image
                          source={obj.img}
                          style={{ width: 42, height: 42, borderRadius: 21 }}
                        />
                        <View style={{ marginLeft: 4 }}>
                          <Text style={{ fontSize: 12, color: "#fff" }}>
                            {obj.name}
                          </Text>
                          <Text style={{ color: "#fff" }}>{obj.msgText}</Text>
                        </View>
                      </View>
                    );
                  } else if (obj.msgId == 2) {
                    {
                      return (
                        <View style={styles.viewMsg}>
                          <Image
                            source={obj.img}
                            style={{ width: 42, height: 42, borderRadius: 21 }}
                          />
                          <View style={{ marginLeft: 4 }}>
                            <Text style={{ fontSize: 12, color: "#fff" }}>
                              {obj.name}
                            </Text>
                            <Text style={{ color: "#fff" }}>{obj.msgText}</Text>
                          </View>
                        </View>
                      );
                    }
                  }
                }
              })}
            </ScrollView>
          </View>
          <View style={styles.viewChatRow}>
            <View style={styles.viewMsgInput}>
              <TextInput
                placeholder="Write something...."
                onChangeText={(Text) => this.setState({ chatMsg: Text })}
                value={this.state.chatMsg}
                style={styles.inputStyles}
              />
              <TouchableOpacity onPress={this.sendMsg}>
                <FontAwesome
                  name="paper-plane"
                  size={25}
                  color="#7F05DB"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.view4}>
                <TouchableOpacity
                  style={[styles.chatEmoji, { marginHorizontal: 7 }]}
                >
                  <Image
                    source={require("../../../assets/icons/seating.png")}
                    style={{ width: 47, height: 47 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatEmoji}>
                  <Image
                    source={require("../../../assets/icons/donation.png")}
                    style={{ width: 47, height: 47 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={[styles.chatEmoji, { marginHorizontal: 7 }]}
                >
                  <FontAwesome name="thumbs-up" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.chatEmoji, { marginRight: 7 }]}
                >
                  <FontAwesome name="heart" size={20} color="#DB0508" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatEmoji}>
                  <FontAwesome name="share-alt" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  view4: {
    flexDirection: "row",
    marginBottom: 5,
    alignSelf: "flex-end",
  },
  viewMsgInput: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  chatEmoji: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  viewMsg: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flexDirection: "row",
    borderRadius: 22,
    padding: 2,
    marginBottom: 8,
  },
  inputStyles: {
    width: 160,
    height: 32,
    fontSize: 15,
    paddingVertical: 0,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  viewChatRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "83%",
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  view3: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  view2: {
    width: 160,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  nodePlayerView: {
    borderWidth: 2,
    borderColor: "red",
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
    top: 250,
    bottom: 100,
    left: 0,
    right: 0,
    marginVertical: 20,
  },
});
