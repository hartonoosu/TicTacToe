import React from "react";
import {Text, View, StyleSheet, Dimensions, ScrollView} from "react-native";
import colors from "../constants/color";

const {width, height} = Dimensions.get('window');

const Message = ({text}) => {
  return (
    <View style = {[styles.titleBox]}>
      <ScrollView>
        <Text style = {styles.titleText}>{text}</Text>
      </ScrollView>
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
    fontSize: 22,
    margin: 25
  }
})
  export default Message;