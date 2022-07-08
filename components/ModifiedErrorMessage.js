import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ModifiedErrorMessage = ({validationCondition, errorMessage}) => {
  return validationCondition ? null : (
    <View>
      <Text style={styles.errorMsg}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});

export default ModifiedErrorMessage;
