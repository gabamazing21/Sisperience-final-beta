import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import GlobalHeader from "../../../components/GlobalHeader";

export default class DiscoverYourPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: [
        {
          url: require("../../../assets/images/videoThumbnail2.png"),
          name: "Aleeta Oc",
          type: "Gym Basics",
          time: 23,
        },
        {
          url: require("../../../assets/images/videoThumbnail3.png"),
          name: "Eva Gareen",
          type: "Dance Basics",
          time: 24,
        },
        {
          url: require("../../../assets/images/videoThumbnail2.png"),
          name: "Angleena",
          type: "Gym Essentials",
          time: 19,
        },
        {
          url: require("../../../assets/images/videoThumbnail1.png"),
          name: "John Wick",
          type: "Yoga Class",
          time: 23,
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
          color="#fff"
          fontSize={20}
          // arrow={true}
          BackIconColor="#fff"
          headingText="Live Class"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={{ marginVertical: 25 }}>
            <Text style={styles.text1}>
              Following trainers are live now. Click on join now to enter in the
              live session.
            </Text>
            {this.state.playList.map((val, i) => {
              return (
                <TouchableOpacity style={styles.touchableView}>
                  <View
                    style={{
                      flex: 1,
                      borderRadius: 11,
                    }}
                  >
                    <ImageBackground source={val.url} style={styles.thumbnail}>
                      <Image
                        source={require("../../../assets/icons/play.png")}
                        style={{ height: 17, width: 15 }}
                      />
                    </ImageBackground>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      flex: 1,
                      marginHorizontal: 5,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "#262628" }}>
                      {val.name}
                    </Text>
                    <Text style={{ fontSize: 12, color: "#262628" }}>
                      {val.type}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1.1,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 11,
                    }}
                  >
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 18,
                          marginLeft: 5,
                          color: "#FFB300",
                          textDecorationLine: "underline",
                        }}
                      >
                        Join Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
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
  thumbnail: {
    width: 72,
    height: 50,
    margin: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "#FFB300",
    fontSize: 17,
    marginHorizontal: 55,
    marginTop: 35,
    marginBottom: 45,
  },
  touchableView: {
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 11,
    width: "83%",
    alignSelf: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text1: {
    width: "83%",
    alignSelf: "center",
    marginBottom: 10,
    color: "#747474",
    fontSize: 15,
  },
});
