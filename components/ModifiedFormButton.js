import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const ModifiedFormButton = ({buttonTitle, navigationFunction}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={navigationFunction}>
      <Text style={styles.buttonTextStyle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: Colors.accent,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default ModifiedFormButton;
