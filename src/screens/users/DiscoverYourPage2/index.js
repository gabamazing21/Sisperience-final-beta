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
          // elevation={10}
          color="#fff"
          fontSize={20}
          arrow={true}
          BackIconColor="#fff"
          headingText="Discover You"
          navigation={this.props.navigation}
        />
        <View style={{ width: "100%", backgroundColor: "#4600B2" }}>
          <Text
            style={{
              color: "#FFB300",
              fontSize: 17,
              marginHorizontal: 55,
              marginTop: 35,
              marginBottom: 45,
            }}
          >
            In case you have missed the live session then you can watch the
            recording of the videos which will be removed after 24 hours.
          </Text>
        </View>
        <ScrollView>
          <View style={{ marginVertical: 60 }}>
            {this.state.playList.map((val, i) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    marginTop: 20,
                    borderRadius: 11,
                    width: "83%",
                    alignSelf: "center",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      borderRadius: 11,
                    }}
                  >
                    <ImageBackground
                      source={val.url}
                      style={{
                        width: 72,
                        height: 50,
                        margin: 11,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
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
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#262628",
                        // textAlign: "center",
                      }}
                    >
                      {val.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#262628",
                        // textAlign: "center",
                      }}
                    >
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
                    <Image
                      source={require("../../../assets/icons/clock.png")}
                      style={{ width: 25, height: 25 }}
                    />
                    <Text
                      style={{ fontSize: 10, marginLeft: 5, color: "#262628" }}
                    >
                      Expires in{" " + val.time + " "}hrs
                    </Text>
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
    backgroundColor: "#21263A",
  },
});
