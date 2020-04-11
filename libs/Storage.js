import { AsyncStorage } from "react-native";

export default class Storage {
  static getAllData = async () => {
    let keys = await AsyncStorage.getAllKeys();
    let stores = await AsyncStorage.multiGet(keys);
    let maps = stores.map((result, i, store) => {
      let key = store[i][0];
      let value = JSON.parse(store[i][1]);
      console.log("Key and it's value: ", key, value);
    });
  };

  static removeAllData = async () => {
    await AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() => console.log("Data deleted successfully"));
  };

  static addItem = async (name) => {
    await AsyncStorage.setItem(name, JSON.stringify({}), (err) => {
      if (err) {
        console.log(`The error is: ${err}`);
      }
    }).catch((err) => console.log(`The error is: ${err}`));
  };

  static removeItem = async (name) => {
    try {
      await AsyncStorage.removeItem(name);
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  };
}
