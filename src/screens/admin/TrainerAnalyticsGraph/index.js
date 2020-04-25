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
import { Overlay } from "react-native-elements";
import { BlurView } from "@react-native-community/blur";
import Entypo from "react-native-vector-icons/Entypo";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      blurEffect: false,
      viewerList: [
        {
          name: "John",
          img: require("../../../assets/images/videoThumbnail2.png"),
        },
        {
          name: "The Rock",
          img: require("../../../assets/images/videoThumbnail3.png"),
        },
        {
          name: "Sofia",
          img: require("../../../assets/images/videoThumbnail1.png"),
        },
        {
          name: "Jassica",
          img: require("../../../assets/images/videoThumbnail2.png"),
        },
        {
          name: "John",
          img: require("../../../assets/images/videoThumbnail2.png"),
        },
        {
          name: "The Rock",
          img: require("../../../assets/images/videoThumbnail3.png"),
        },
        {
          name: "Sofia",
          img: require("../../../assets/images/videoThumbnail1.png"),
        },
        {
          name: "Jassica",
          img: require("../../../assets/images/videoThumbnail2.png"),
        },
      ],
    };
  }
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
          headingText="Trainer Analytics"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={styles.view1}>
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 50 }}
                source={require("../../../assets/images/videoThumbnail3.png")}
              />
            </View>
            <View style={styles.view2}>
              <Text style={{ fontSize: 24, color: "#262628" }}>John Wick</Text>
              <Text style={{ fontSize: 20, color: "#262628" }}>
                Gym Trainer
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({ visible: true, blurEffect: true });
            }}
          >
            <Text style={styles.text1}>People Viewed</Text>
          </TouchableOpacity>
          <View style={styles.view4}>
            <Text style={{ color: "#262628", fontSize: 20 }}>
              Total Viewers
            </Text>
            <View style={styles.view3}>
              <Text style={{ color: "#262628", fontSize: 20 }}>3.5 K</Text>
            </View>
          </View>
          <Text style={styles.text2}>Rush Hours</Text>
          <Image
            source={require("../../../assets/images/graph.png")}
            style={{
              height: 220,
              width: 230,
              alignSelf: "center",
              marginTop: 30,
              marginBottom: 80,
            }}
          />
        </ScrollView>
        <Overlay
          isVisible={this.state.visible}
          onBackdropPress={() =>
            this.setState({ visible: false, blurEffect: false })
          }
          windowBackgroundColor="rgba(255, 255, 255, .1)"
          overlayBackgroundColor="rgba(255, 255, 255, .1)"
          width="auto"
          height="auto"
          fullScreen={true}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ visible: false, blurEffect: false });
            }}
            style={{
              width: "100%",
              height: 30,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Entypo name="circle-with-cross" size={30} />
          </TouchableOpacity>
          <ScrollView>
            {this.state.viewerList.map((val, i) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 30,
                    width: "80%",
                    alignSelf: "center",
                  }}
                >
                  <Image
                    source={val.img}
                    style={{ width: 74, height: 74, borderRadius: 37 }}
                  />
                  <Text
                    style={{ color: "#262628", fontSize: 20, marginLeft: 10 }}
                  >
                    {val.name}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </Overlay>
        {this.state.blurEffect ? (
          <BlurView
            style={styles.blurView}
            //   viewRef={this.state.blurEffect}
            blurType="light"
            blurAmount={18}
            reducedTransparencyFallbackColor="white"
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2EDED",
  },
  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  view4: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text2: {
    width: "80%",
    alignSelf: "center",
    color: "#262628",
    fontSize: 20,
    marginTop: 50,
  },
  view3: {
    marginLeft: 10,
    backgroundColor: "#fff",
    width: 90,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text1: {
    color: "#FFB300",
    fontSize: 22,
    textDecorationLine: "underline",
    width: "80%",
    alignSelf: "center",
    marginVertical: 50,
  },
  view2: {
    alignSelf: "flex-end",
    flex: 1,
    marginBottom: 10,
  },
  view1: {
    flexDirection: "row",
    marginTop: 30,
    width: "80%",
    alignSelf: "center",
  },
});
