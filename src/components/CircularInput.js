import React, { Component } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

export default class CircularInput extends Component {
  render() {
    const {
      placeholder,
      value,
      error_message,
      name,
      onChangeText,
    } = this.props;
    return (
      <>
        <View style={styles.inputView}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => onChangeText(name, text)}
            placeholderTextColor="#9B9B9B"
            style={styles.textInput}
          />
          {error_message && (
            <Text
              style={{
                color: "red",
                fontSize: 12,
                marginTop: 2,
              }}
            >
              {error_message}
            </Text>
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 40,
    paddingVertical: 0,
    fontSize: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  inputView: {
    marginLeft: 7,
    width: "92%",
    height: 40,
  },
});
