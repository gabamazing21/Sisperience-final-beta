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
          url: require("../../../assets/images/videoThumbnail1.png"),
          name: "The Rock",
          type: "Gym Basics",
          completed: false,
        },
        {
          url: require("../../../assets/images/videoThumbnail2.png"),
          name: "Jasmine",
          type: "Dance Basics",
          completed: false,
        },
        {
          url: require("../../../assets/images/videoThumbnail3.png"),
          name: "Angleena",
          type: "Gym Essentials",
          completed: false,
        },
        {
          url: require("../../../assets/images/videoThumbnail1.png"),
          name: "Aleeta Oc",
          type: "Yoga Class",
          completed: false,
        },
        {
          url: require("../../../assets/images/videoThumbnail2.png"),
          name: "Jasmine",
          type: "Dance Basics",
          completed: false,
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
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("DiscoverYourPage2");
            }}
            style={{ alignSelf: "flex-end", marginRight: 10, marginBottom: 45 }}
          >
            <Text
              style={{
                fontSize: 11,
                color: "#FFB300",
                textDecorationLine: "underline",
              }}
            >
              Click here to watch unfinished videos.
            </Text>
          </TouchableOpacity>
          <Image
            source={require("../../../assets/images/sixtyDegree.png")}
            style={{
              width: 113,
              height: 113,
              alignSelf: "center",
              marginBottom: 25,
            }}
          />
        </View>
        <ScrollView>
          <View style={{ marginTop: -1 }}>
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
                        textAlign: "center",
                      }}
                    >
                      {val.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#262628",
                        textAlign: "center",
                      }}
                    >
                      {val.type}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1.2,
                      alignItems: "center",
                      borderRadius: 11,
                    }}
                  >
                    <Text style={{ fontSize: 10, color: "#FFB300" }}>
                      Completed
                    </Text>
                    <Text
                      style={{ fontSize: 10, marginLeft: 5, color: "#262628" }}
                    >
                      Unfinished
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
