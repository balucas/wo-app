import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from 'react-native';
import { Button } from 'react-native-elements';
import test from '../constants/data.json';
import { get, set } from '../data/AppData.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={Test2}/>
        <Text>Home screen here</Text>
        <ExerciseList list={test}/>
        <Button onPress={Test}/>
      </View>
    );
  }

}
  var counter = 300;

  async function Test2(){
    var a = await get("name");
    console.log("hs name is: " + a);
  }

  function Test(name){
    set("name", name);
  }

function ExerciseList(props){
  const listView = props.list.map((item) =>
    <Button title={item.name} key={item.name} onPress={() => Test(item.name)}/>
  );
  return (
    listView
  )
}

class Data extends React.Component {
  render(){
    return(
      <Text>{this.props.name}</Text>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#00ff00',
  },
  button: {
    backgroundColor: '#fff',
  }
});
