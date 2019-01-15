import React, {Component} from 'react';
import { Button } from 'react-native-elements';
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

export default class WorkoutModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(isVisible){
    this.setState({modalVisible: isVisible});
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
              <Text>Hello World!</Text>
              <ScrollView horizontal={true}>
                <Button title='Test'/>
                  <Button title='Test'/>
                    <Button title='Test'/>
                      <Button title='Test'/>
              </ScrollView>

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

const styles = StyleSheet.create({
  actionButton:{
    width: 100,
    margin: 5
  }
});
