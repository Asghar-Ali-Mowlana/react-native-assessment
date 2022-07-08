import React from 'react';
import {StyleSheet, View, Text, TextInput, StatusBar} from 'react-native';

const ServiceCard = ({
  serviceTitle,
  serviceAmount,
  serviceDuration,
  serviceProvider,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.textStyle}>{serviceTitle}</Text>
        <Text style={styles.textStyle}>{serviceAmount}</Text>
        <Text style={styles.textStyle}>{serviceDuration}</Text>
        <Text style={styles.textStyle}>{serviceProvider}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageContainer: {},
  detailsContainer: {},
  textStyle: {
    color: 'black',
  },
});

export default ServiceCard;
