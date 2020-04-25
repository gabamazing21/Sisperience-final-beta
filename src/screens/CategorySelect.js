import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectUserMode } from "../redux/actions/authActions";

const CategorySelect = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: " rgba(0, 0, 0, 1)" }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/images/background3.png")}
      >
        <ScrollView>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Image
                source={require("../assets/images/logo.png")}
                style={{ width: 207, height: 113 }}
              />
            </View>
            <Text style={styles.text1}>SELECT YOUR CATEGORY</Text>
            <TouchableOpacity
              onPress={() => {
                props.selectUserMode(
                  "trainer",
                  props.navigation,
                  "TrainerAuth"
                );
              }}
              style={[styles.btnStyle, { backgroundColor: "#8A0095" }]}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                Trainer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.selectUserMode("user", props.navigation, "UserAuth");
              }}
              style={[
                styles.btnStyle,
                { backgroundColor: "#4600B2", marginTop: 35 },
              ]}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                Customer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.selectUserMode("admin", props.navigation, "AdminAuth");
              }}
              style={[
                styles.btnStyle,
                { backgroundColor: "#FFB300", marginTop: 35 },
              ]}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                Admin
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "#fff",
    width: "65%",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 80,
  },
  view1: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingBottom: 40,
  },
  view2: {
    marginVertical: 15,
    marginBottom: 60,
    alignSelf: "center",
  },
  btnStyle: {
    width: "80%",
    alignSelf: "center",
    borderRadius: 30,
    alignItems: "center",
    height: 60,
    justifyContent: "center",
  },
});

const mapDispatchToProps = (dispatch) => ({
  selectUserMode: bindActionCreators(selectUserMode, dispatch),
});

export default connect(null, mapDispatchToProps)(CategorySelect);
