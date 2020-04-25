import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Datepicker from "react-native-datepicker";
import GlobalHeader from "../../../components/GlobalHeader";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
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
          headingText="Payment"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <TextInput
            placeholderTextColor="#9B9B9B"
            placeholder="Card Number"
            style={styles.textInput}
          />
          <View style={styles.viewDatepicker}>
            <Datepicker
              date={this.state.date}
              format="DD-MM-YYYY"
              // color="#0000000"
              style={{
                width: "95%",
                // fontSize: 15,
                // color: "#000",
              }}
              // textStyle={{color: '#ffffff'}}
              // placeHolderTextStyle={{ color: "red" }}
              placeholderText="Date of Birth"
              customStyles={{
                // dateIcon: {
                //   position: 'absolute',
                //   left: 20,
                //   top: 4,
                //   marginLeft: 20
                // },
                dateInput: {
                  marginLeft: 0,
                  paddingRight: "61%",
                  borderWidth: 0,
                },
                dateText: {
                  color: "#000",
                  fontSize: 15,
                },
                placeholderText: {
                  color: "#000",
                  fontSize: 15,
                },
              }}
              showIcon={false}
              onDateChange={(date) => {
                this.setState({ date: date });
              }}
            />
          </View>
          <TextInput
            placeholderTextColor="#9B9B9B"
            placeholder="CVC"
            style={styles.textInput}
          />
          <TextInput
            placeholderTextColor="#9B9B9B"
            placeholder="Card Holder's Name"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.button1}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#A700A7", "#4100B2"]}
              style={styles.linearGrad}
            >
              <Text style={{ color: "#fff", fontSize: 15 }}>ADD CARD</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.textAcceptableMethods}>Acceptable methods:</Text>
          <View style={styles.viewMethods}>
            <Image
              source={require("../../../assets/icons/apple.png")}
              style={{ width: 34, height: 34 }}
            />
            <Text style={{ color: "#9B9B9B", fontSize: 15, marginLeft: 5 }}>
              Apple Pay
            </Text>
          </View>
          <View style={styles.viewMethods}>
            <Image
              source={require("../../../assets/icons/paypal.png")}
              style={{ width: 34, height: 34 }}
            />
            <Text style={{ color: "#9B9B9B", fontSize: 15, marginLeft: 5 }}>
              Pay Pal
            </Text>
          </View>
          <View style={styles.viewMethods}>
            <Image
              source={require("../../../assets/icons/visa.png")}
              style={{ width: 34, height: 34 }}
            />
            <Text style={{ color: "#9B9B9B", fontSize: 15, marginLeft: 5 }}>
              VISA Card
            </Text>
          </View>
          <TouchableOpacity style={styles.button2}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#A700A7", "#4100B2"]}
              style={[styles.linearGrad, { flexDirection: "row" }]}
            >
              <Image
                source={require("../../../assets/icons/transactionHistory.png")}
                style={{ height: 26, width: 23, tintColor: "#fff" }}
              />
              <Text style={{ fontSize: 20, marginLeft: 7, color: "#fff" }}>
                Transaction History
              </Text>
            </LinearGradient>
          </TouchableOpacity>
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
  textAcceptableMethods: {
    width: "75%",
    alignSelf: "center",
    fontSize: 16,
    color: "#9B9B9B",
    marginBottom: 20,
    marginTop: 40,
  },
  viewMethods: {
    flexDirection: "row",
    width: "75%",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 13,
  },
  viewDatepicker: {
    width: "65%",
    borderBottomWidth: 1,
    marginHorizontal: 50,
    borderColor: "rgba(112, 112, 112, 0.3)",
    marginTop: 30,
  },
  textInput: {
    width: "65%",
    marginHorizontal: 49,
    borderBottomWidth: 1,
    borderColor: "rgba(112, 112, 112, 0.3)",
    marginTop: 30,
    fontSize: 15,
    paddingVertical: 7,
  },
  linearGrad: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  button2: {
    width: "75%",
    marginVertical: 30,
    marginBottom: 70,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  button1: {
    width: "75%",
    marginTop: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
