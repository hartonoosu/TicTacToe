import React from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";
import colors from "../constants/color";

const {width, height} = Dimensions.get('window');

const Title = ({text}) => {
  return (
    <View style = {[styles.titleBox]}>
      <Text style = {styles.titleText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleBox: {
    height: height * 0.05,
    width: "80%",
    backgroundColor: "green",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10
  },
  titleText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25
  }
})
  export default Title;