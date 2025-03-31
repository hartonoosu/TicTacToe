import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import colors from "../constants/color";

const { width, height } = Dimensions.get("window");

function checkState(board) {
  // Your implementation here
  const winCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const xWin = winCond.some((cond) => cond.every((p) => board[p] === "X"));
  if (xWin) return "X wins";
  const oWin = winCond.some((cond) => cond.every((p) => board[p] === "O"));
  if (oWin) return "O wins";
  const [xMoves, oMoves] = board.reduce(
    (a, c) => {
      if (c === "X") return [a[0] + 1, a[1]];
      if (c === "O") return [a[0], a[1] + 1];
      return a;
    },
    [0, 0]
  );
  if (xMoves + oMoves === 9) return "It is a tie";
  if (xMoves > oMoves) return "O to play";
  return "X to play";
}

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("X to play");
  const [currentPlayer, setCurrentPlayer] = useState("X");


  const handleClick = (index) => {
    if(board[index] !== ""|| status.includes("wins") || status === "It is a tie") return; // i dont get this part yet

    const newBoard = [...board]; //how can there is a new board array here?
    newBoard[index] = currentPlayer; 
    setBoard(newBoard);
    const result = checkState(newBoard);
    setStatus(result);
  
    if (!result.includes("wins") && result !== "It is a tie") {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }


  return (
    <View style={styles.frame}>
      {board.map((player, index) => (
        <Pressable
          key={index}
          style={styles.board}
          onPress={() => handleClick(index)}
        >
          <Text style={styles.text}>{player}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    width: width * 0.8 + 54, // comes from 2xborderWidth + padding x 2
    height: width * 0.8 + 54,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25,
    padding: 25,
  },
  board: {
    backgroundColor: "green",
    width: (width * 0.8) / 3,
    height: (width * 0.8) / 3,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 100,
    color: "white",
  },
});

export default Board;
