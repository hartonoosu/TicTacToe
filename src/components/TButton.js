import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import colors from "../constants/color";

const TButton = ({
  label,
  onPress,
  backgroundColor = colors.backgroundButton,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 50
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default TButton;
