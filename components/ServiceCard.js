import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ServiceCard = ({
  serviceTitle,
  serviceAmount,
  serviceDuration,
  serviceProvider,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuySdKYOAP7D4P_OUAy2YvVIpobnm9HJWvMmSJ9aZAw&s',
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
    width: '70%',
    height: '50%',
    borderRadius: 100,
  },
  detailsContainer: {},
  textStyle: {
    color: 'black',
  },
});

export default ServiceCard;
