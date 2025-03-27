import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity, Pressable } from 'react-native';
import TButton from '../components/TButton';
import Board from '../components/Board';
import Title from '../components/Title';

const {width, height} = Dimensions.get('window');
const marks = ['O','','O','X','X','O','X','','O'];

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Title text={"Tic Tac Toe"}></Title>
      <View style={styles.gameButtonContainer}>
        <Pressable style={styles.gameButton} activeOpacity={0.7}>
          <Text style={styles.gameButtonText}>{'<'}</Text>
        </Pressable>
        <Pressable style={[styles.gameButton, {width:180}]} activeOpacity={0.7}>
          <Text style={styles.gameButtonText}>{'New Game'}</Text>
        </Pressable>
        <Pressable style={styles.gameButton} activeOpacity={0.7}>
          <Text style={styles.gameButtonText}>{'>'}</Text>
        </Pressable>
      </View>
      <Board marks={marks}></Board>
      <View style={styles.buttonContainer}>
        <TButton label={"Rules"} onPress={()=> navigation.navigate("Rules")}></TButton>
        <TButton label={"Credit"} onPress={()=> navigation.navigate("Credit")}></TButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow-light',
    alignItems: 'center',
    justifyContent: "space-around",
  }, 
  buttonContainer: {
    flexDirection: "row",
  },
  gameButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  gameButton:{
    backgroundColor: "grey",
    width: 40,
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center"
  },
  gameButtonText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  }
});