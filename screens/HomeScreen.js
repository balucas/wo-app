import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import test from '../constants/data.json';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home screen here</Text>
        <NumberList list={test}/>
      </View>
    );
  }
}

function NumberList(props){
  const listView = props.list.map((item) =>
    <Text key={item.name}>
      {item.name}
    </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
  },
});
