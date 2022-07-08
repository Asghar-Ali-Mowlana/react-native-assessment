import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ServiceCard = ({
  serviceTitle,
  serviceAmount,
  serviceDuration,
  serviceProvider,
  serviceImage
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: {serviceImage},
          }}
        />
      </View>
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
  image: {
    width: 100,
    height: 100,
  },
  detailsContainer: {},
  textStyle: {
    color: 'black',
  },
});

export default ServiceCard;
