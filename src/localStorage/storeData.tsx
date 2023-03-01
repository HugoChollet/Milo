import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async ({
  value,
  key,
}: {
  value: any;
  key: string;
}) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error when setting local Storage : ', e);
  }
};
