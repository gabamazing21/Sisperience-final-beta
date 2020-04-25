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

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainerList: [
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
          <View style={{ marginVertical: 10 }}>
            {this.state.trainerList.map((val, i) => {
              return (
                <View style={styles.view1}>
                  <View style={{ alignItems: "center" }}>
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                      }}
                      source={val.img}
                    />
                    <Text
                      style={{ fontSize: 24, color: "#262628", marginTop: 8 }}
                    >
                      {val.name}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.viewDetails}>View Details</Text>
                  </TouchableOpacity>
                </View>
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
    backgroundColor: "#F2EDED",
  },
  view1: {
    width: "80%",
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewDetails: {
    color: "#FFB300",
    textDecorationLine: "underline",
    fontSize: 22,
    top: -20,
  },
});
