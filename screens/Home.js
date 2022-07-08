import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, StatusBar} from 'react-native';

const Home = () => {
  // useEffect(() => {
  //   fetch('https://stage-api.serw.io/v1/auth/local/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: 'qxkeb06yat@buy-blog.com',
  //       password: 'test@123',
  //     }),
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       if (data.message == 'Invalid credentials') {
  //         console.log('WRONG EMAIL AND PASSWORD');
  //       }
  //       console.log(data);
  //     });
  // }, []);

  return (
    <View>
      <Text style={{color: 'black'}}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
