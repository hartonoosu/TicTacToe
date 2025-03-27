import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import colors from "../constants/color";

const {width, height} = Dimensions.get('window');

const Board = ({marks}) => {
  return(
    <View style = {styles.frame}>
      {marks.map((mark, index) =>(
        <View key={index} style = {styles.board}>
          <Text style = {styles.text}>{mark}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  frame: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "orange",
    width: width * 0.8 + 54, // comes from 2xborderWidth + padding x 2
    height: width * 0.8 + 54,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25,
    padding: 25
  },
  board: {
    backgroundColor: "green",
    width: (width * 0.8) / 3 ,
    height: (width * 0.8) /3 ,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 100,
    color: "white"
  }
})

export default Board;