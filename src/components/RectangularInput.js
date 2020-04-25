import React, { Component } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

export default class RectangularInput extends Component {
  render() {
    const {
      title,
      placeholder,
      value,
      error_message,
      name,
      onChangeText,
      secureTextEntry = false,
      titleColor = "#9B9B9B",
    } = this.props;
    return (
      <>
        <Text
          style={{
            color: titleColor,
            fontSize: 15,
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 5,
          }}
        >
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => onChangeText(name, text)}
            placeholderTextColor="rgba(0, 0, 0, 0.3)"
            secureTextEntry={secureTextEntry}
            style={{
              marginVertical: 0,
              paddingHorizontal: 15,
              fontSize: 15,
            }}
          />
        </View>
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
      </>
    );
  }
}

const styles = StyleSheet.create({});
