import { StyleSheet, Text, View, Dimensions } from 'react-native';
import TButton from '../components/TButton';
import Board from '../components/Board';
import Title from '../components/Title';

const {width, height} = Dimensions.get('window');
const marks = ['O','','O','X','X','O','X','','O']

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Title text={"Tic Tac Toe"}></Title>
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
  }
});