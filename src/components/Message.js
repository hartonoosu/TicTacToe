import React from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";
import colors from "../constants/color";

const {width, height} = Dimensions.get('window');

const Message = ({text}) => {
  return (
    <View style = {[styles.titleBox]}>
      <Text style = {styles.titleText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleBox: {
    height: height * 0.6,
    width: "80%",
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 15
  }
})
  export default Message;