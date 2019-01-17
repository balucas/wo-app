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
    selectedExercise: 'Hello World saved',
  };

  setModalVisible(isVisible){
    this.setState({modalVisible: isVisible});
  }

  setSelectedEx(text){
    this.setState({selectedExercise: text});
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
                  super={this}
                  />
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

function CreateExerciseList(props){
  const listView = props.list.map((item) =>
    <ExerciseButton name={item.name}
            key={item.name}
            exerciseList={props.that}
            selectedName={props.selectedName}
            />
  );
  return (
    listView
  )
}

class ExerciseList extends Component {

  state = {
    selected: '',
  };

  _setSelected (name) {
    this.setState({selected: name});
    this.props.super.setSelectedEx(name);
  }

  render(){
    return(
      <CreateExerciseList
        list={test}
        that={this}
        selectedName={this.state.selected}
      />
    )
  }
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
              buttonStyle={this.props.name == this.props.selectedName? styles.exerciseButtonSelected : styles.exerciseButton }
              onPress={() => {
                this._buttonPressed();
                this.props.exerciseList._setSelected(this.props.name);
              }}/>
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
    backgroundColor: '#51abff'
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
