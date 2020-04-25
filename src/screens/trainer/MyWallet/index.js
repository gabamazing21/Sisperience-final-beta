import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import GlobalHeader from "../../../components/GlobalHeader";

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyRecord: [
        {
          month: "January",
          date: "Wednesday, January 6",
          price: "$3",
        },
        {
          month: "October",
          date: "Wednesday, January 13",
          price: "$12",
        },
        {
          month: "June",
          date: "Wednesday, January 20",
          price: "$3",
        },
        {
          month: "December",
          date: "Wednesday, January 6",
          price: "$3",
        },
        {
          month: "June",
          date: "Wednesday, January 20",
          price: "$3",
        },
        {
          month: "December",
          date: "Wednesday, January 6",
          price: "$3",
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
          headingText="My Wallet"
          navigation={this.props.navigation}
        />
        <View style={styles.view1}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="pound-sign" size={45} color="#fff" />
            <Text style={styles.text1}>150</Text>
          </View>
          <Text style={{ fontSize: 15, color: "#fff" }}>Total Earnings</Text>
        </View>
        <ScrollView>
          <View style={{ marginBottom: 20 }}>
            <View style={{ width: "75%", alignSelf: "center" }}>
              <Text
                style={{
                  fontSize: 25,
                  marginLeft: 5,
                  fontWeight: "bold",
                  marginTop: 40,
                }}
              >
                History
              </Text>
            </View>
            <View style={styles.lineBar} />
            {this.state.historyRecord.map((val, index) => {
              return (
                <View style={styles.view2}>
                  <View>
                    <Text
                      style={{ fontSize: 18, marginLeft: 5, color: "#262628" }}
                    >
                      {val.month}
                    </Text>
                    <Text
                      style={{ fontSize: 15, color: "#9B9B9B", marginTop: 5 }}
                    >
                      {val.date}
                    </Text>
                  </View>
                  <View style={{ justifyContent: "flex-end" }}>
                    <Text style={{ color: "#070707", fontSize: 18 }}>
                      {val.price}
                    </Text>
                  </View>
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
    backgroundColor: "#fff",
  },
  lineBar: {
    width: "80%",
    alignSelf: "center",
    borderWidth: 0.6,
    borderColor: "#707070",
    opacity: 0.3,
    marginVertical: 10,
  },
  view2: {
    width: "75%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    // marginTop: 20,
  },
  text1: {
    fontSize: 50,
    color: "#fff",
    marginLeft: 15,
    fontWeight: "bold",
  },
  view1: {
    height: 165,
    backgroundColor: "#4600B2",
    justifyContent: "center",
    alignItems: "center",
  },
});
