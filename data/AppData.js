import { AsyncStorage } from 'react-native';

//Basic getter and setter wrapper for AsyncStorage
export async function get(key){
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log("Data retrieved - " + key + ": " + value);
    }

    return value;
   } catch (error) {
     // Error retrieving data
   }
}

export async function set(key, value){
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Data stored - " + key + ": " + value);
  } catch (error) {
    // Error saving data
  }
}
