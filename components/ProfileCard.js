import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ProfileCard = ({expertName, expertCountry}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuySdKYOAP7D4P_OUAy2YvVIpobnm9HJWvMmSJ9aZAw&s',
          }}
        />
        <View>
          <Text style={styles.text}>{expertName}</Text>
          <Text style={styles.text}>{expertCountry}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '4.7%',
  },
  profileContainer: {
    height: 200,
    width: 150,
    padding: '10%',
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: '70%',
    height: '50%',
    borderRadius: 100,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
});

export default ProfileCard;
