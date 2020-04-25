import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
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
          headingText="Transaction History"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={{ marginBottom: 20 }}>
            {this.state.historyRecord.map((val, index) => {
              return (
                <View
                  style={{
                    width: "75%",
                    alignSelf: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
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
});
