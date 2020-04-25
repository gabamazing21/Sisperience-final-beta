import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native";

const Loader = (props) => {
  const { isLoading = false, loadingMessage = "Loading, please wait" } = props;

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.loaderBody}>
          <ActivityIndicator
            size={25}
            color="#A700A7"
            style={styles.indicator}
          />
          <Text style={styles.loadingMessage}>{loadingMessage}</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0, 0.7)",
  },
  loaderBody: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    width: "80%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  indicator: {
    paddingLeft: 10,
  },
  loadingMessage: {
    paddingLeft: 10,
    // color: "rgba(75, 75, 75, 0.5)",
    color: "#4100B2",
  },
});
