import { AsyncStorage } from 'react-native';

//Basic getter and setter wrapper for AsyncStorage
export function get(key){
  return _retrieveData(key);
}

export function set(key, value){
  return _storeData(key, value);
}

_retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
   } catch (error) {
     // Error retrieving data
   }
}

_storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
}
