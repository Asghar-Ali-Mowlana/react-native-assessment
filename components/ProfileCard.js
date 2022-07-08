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
        <Text style={{color: 'white'}}>{expertName}</Text>
        <Text>{expertCountry}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
  },
  profileContainer: {
    height: 200,
    width: '45%',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default ProfileCard;
