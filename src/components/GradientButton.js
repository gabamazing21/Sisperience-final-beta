import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const GradientButton = (props) => {
  const { title, onPress, borderRadius = 5, width = "80%" } = props;
  return (
    <TouchableOpacity
      style={{
        width: width,
        alignSelf: "center",
        height: 50,
      }}
      onPress={() => onPress()}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#A700A7", "#4100B2"]}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: borderRadius,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 15 }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({});
