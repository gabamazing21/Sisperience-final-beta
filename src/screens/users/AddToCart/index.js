import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Datepicker from "react-native-datepicker";
import GlobalHeader from "../../../components/GlobalHeader";

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
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
          headingText="Add card"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <TextInput
            placeholderTextColor="#9B9B9B"
            placeholder="Card Number"
            style={styles.textInput}
          />
          <View
            style={{
              width: "65%",
              borderBottomWidth: 1,
              marginHorizontal: 50,
              borderColor: "rgba(112, 112, 112, 0.3)",
              marginTop: 30,
            }}
          >
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
          <TouchableOpacity style={styles.btnStyle}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#A700A7", "#4100B2"]}
              style={styles.linearGragient}
            >
              <Text style={{ color: "#fff", fontSize: 15 }}>DONE</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  linearGragient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  btnStyle: {
    width: "74%",
    marginVertical: 70,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
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
});
