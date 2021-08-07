import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddPhoto = ({addPhoto}) => {
  return (
    <Button
      icon={<Icon name="plus" size={30} color="black" />}
      title="add picture"
      onPress={() =>
        addPhoto('https://live.staticflickr.com/56/125277887_e1f20c8d6b.jpg')
      }
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddPhoto;
