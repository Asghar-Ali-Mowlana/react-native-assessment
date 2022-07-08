import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import Colors from '../constants/Colors';
import ModifiedErrorMessage from '../components/ModifiedErrorMessage';
import ModifiedFormButton from '../components/ModifiedFormButton';

const Login = props => {
  const [data, setData] = useState({
    email: '',
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  // Email Validation
  const textInputChange = val => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(val.toLowerCase())) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: false,
        isValidUser: false,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkTextInputChange: true,
        isValidUser: true,
      });
    }
  };
  // Email Validation End

  // Password Validation
  const handlePasswordChange = val => {
    if (val.trim().length < 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    }
  };
  // Password Validation End

  // User Login Validation
  const loginHandle = () => {
    if (
      data.email.trim().length == 0 ||
      data.password.trim().length == 0 ||
      !data.isValidUser ||
      !data.isValidPassword
    ) {
      // setAlertModalVisible(!alertModalVisible);
      console.log('ENTER VALID DETAILS');
    } else {
      fetch('https://stage-api.serw.io/v1/auth/local/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email, //'qxkeb06yat@buy-blog.com',
          password: data.password, //'test@123',
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.statusCode == 401) {
            console.log('WRONG EMAIL AND PASSWORD');
            Alert.alert(
              'INVALID CREDENTIALD',
              'Wrong email or password',
            );
          } else {
            props.navigation.navigate('Home Screen');
          }
          console.log(data);
        });
    }
  };
  // User Login Validation End

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Login</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            keyboardType="email-address"
            required
            onChangeText={val => textInputChange(val)}
          />
        </View>
        <ModifiedErrorMessage
          validationCondition={data.isValidUser}
          errorMessage="Enter a valid email address"
        />
        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            required
            onChangeText={val => handlePasswordChange(val)}
          />
        </View>
        <ModifiedErrorMessage
          validationCondition={data.isValidPassword}
          errorMessage="Password must be 8 characters long"
        />
        <View style={styles.button}>
          <ModifiedFormButton
            buttonTitle="Login"
            navigationFunction={() => loginHandle()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: Colors.accent,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default Login;
