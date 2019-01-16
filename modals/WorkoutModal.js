import React, {Component} from 'react';
import {
  Button,
  Input,
} from 'react-native-elements';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  Alert,
  TouchableHighlight,
  Modal,
} from 'react-native';

import test from '../constants/data.json';
import { get, set } from '../data/AppData.js';

export default class WorkoutModal extends Component {
  state = {
    modalVisible: false,
    titleText: 'Hello World saved',
  };

  setModalVisible(isVisible){
    this.setState({modalVisible: isVisible});
  }

  setTitleText(text){
    this.setState({titleText: text});
  }

  render(){
    return(
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{marginTop: 22}}>
              <Text>{this.state.titleText}</Text>
              <ScrollView
                horizontal={true}
                showHorizontalScrollIndicator={false}>
                <ExerciseList
                  list={test}
                  that={this}/>
              </ScrollView>

              <Input
                placeholder='Enter Weight'/>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}>
                <Button
                  title='Save'
                  buttonStyle={styles.actionButton}
                />
                <Button
                  title='Cancel'
                  buttonStyle={styles.actionButton}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}/>
              </View>
          </View>
        </Modal>

        <Button
          title='Record Workout'
          onPress={() => {
            this.setModalVisible(true);
          }}>
        </Button>
      </View>
    );
  }
}

function setSelected(exName){
  console.log(exName);
  titleText = exName;
}

function ExerciseList(props){
  const listView = props.list.map((item) =>
    <ExerciseButton name={item.name}
            key={item.name}
            // onPress={() => {props.that.setTitleText(item.name);
            //                 }}
            />
  );
  return (
    listView
  )
}

class ExerciseButton extends Component {

  state = {
    buttonPressed: false,
    buttonStyle: styles.exerciseButton,
  }

  _buttonPressed(){
    this.setState({buttonStyle: styles.exerciseButtonSelected});
  }

  render(){
    return(
      <Button title={this.props.name}
              key={this.props.name}
              buttonStyle={this.state.buttonStyle}
              onPress={() => {this._buttonPressed()}}/> 
    )
  }
}

const styles = StyleSheet.create({
  actionButton:{
    width: 100,
    margin: 5
  },

  exerciseButton:{
    width: 100,
    height: 60,
    borderWidth: 1,
    borderRadius: 2,
    margin: 2,
    backgroundColor: '#808080'
  },

  exerciseButtonSelected:{
    width: 100,
    height: 60,
    borderWidth: 1,
    borderRadius: 2,
    margin: 2,
    backgroundColor: '#fff'
  }
});


// function ExerciseList(props){
//   const listView = props.list.map((item) =>
//     <Button title={item.name}
//             key={item.name}
//             onPress={() => {props.that.setTitleText(item.name);
//                            this.buttonStyle = styles.exerciseButtonSelected}}
//             buttonStyle={styles.exerciseButton}/>
//   );
//   return (
//     listView
//   )
// }
