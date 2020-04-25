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
import GlobalHeader from "../../../components/GlobalHeader";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class WithdrawFunds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: false,
      selected2: true,
      selected3: false,
      id: "",
    };
  }
  radioPress = () => {
    this.state.id === id;
    id == "1"
      ? this.setState({ selected1: true })
      : id == "2"
      ? this.setState({ selected2: true })
      : id == "3"
      ? this.setState({ selected3: true })
      : null;
  };
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
          headingText="Withdraw Funds"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={styles.viewTop}>
            <Text style={styles.text1}>Enter amount</Text>
            <View style={styles.viewInput}>
              <TextInput
                placeholderTextColor="#DBDADA"
                placeholder="100"
                keyboardType="numeric"
                style={styles.textInputStyle}
              />
              <FontAwesome5
                name="pound-sign"
                color="#747474"
                size={32}
                style={{ marginTop: 20, marginLeft: 10 }}
              />
            </View>
            <Text style={styles.text2}>Select your acount:</Text>
            <View style={styles.lineBar} />
            <Text style={styles.text3}>
              You can choose between one of the following methods to withdraw
              funds.
            </Text>
            <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  this.state.id.push("1");
                  radioPress();
                }}
                style={styles.btnSelect}
              >
                <View style={styles.radioButton}>
                  {this.state.selected1 ? (
                    <View style={styles.radiobtnCore} />
                  ) : null}
                </View>

                <Image
                  source={require("../../../assets/images/applePay.png")}
                  style={{ width: 68, height: 50, marginHorizontal: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnSelect, { marginBottom: 25 }]}
              >
                <View style={styles.radioButton}>
                  {this.state.selected2 ? (
                    <View style={styles.radiobtnCore} />
                  ) : null}
                </View>
                <Image
                  source={require("../../../assets/images/paypal.png")}
                  style={{ width: 81, height: 21, marginHorizontal: 18 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnSelect, { marginBottom: 0 }]}>
                <View style={styles.radioButton}>
                  {this.state.selected1 ? (
                    <View style={styles.radiobtnCore} />
                  ) : null}
                </View>
                <Image
                  source={require("../../../assets/images/visa.png")}
                  style={{ width: 50, height: 15, marginHorizontal: 18 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.btnDone}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#A700A7", "#4100B2"]}
              style={styles.linearGradient}
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  btnDone: {
    width: "74%",
    marginVertical: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
  },
  btnSelect: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text3: {
    alignSelf: "center",
    textAlign: "center",
    color: "#9B9B9B",
    fontSize: 15,
    marginHorizontal: 5,
    marginVertical: 12,
  },
  text2: {
    color: "#0F0E0E",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 80,
    marginVertical: 14,
  },
  viewInput: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    right: -15,
  },
  text1: {
    fontSize: 20,
    color: "#0F0E0E",
    alignSelf: "center",
    marginTop: 23,
  },
  textInputStyle: {
    backgroundColor: "#fff",
    paddingVertical: 0,
    paddingHorizontal: 5,
    color: "grey",
    fontSize: 34,
    textAlign: "center",
    borderRadius: 5,
    width: 130,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  lineBar: {
    width: "96%",
    alignSelf: "center",
    borderWidth: 0.7,
    borderColor: "#707070",
    opacity: 0.3,
    marginVertical: 2,
  },
  radiobtnCore: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D32F2F",
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.3,
    justifyContent: "center",
    alignItems: "center",
  },
  viewTop: {
    width: "85%",
    marginVertical: 32,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
