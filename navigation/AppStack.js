import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import Experts from '../screens/Experts';
import Services from '../screens/Services';
import Login from '../screens/Login';

import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Home Screen"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const TopTabNavigation = () => {
  return (
    <TopTab.Navigator screenOptions={{}}>
      <TopTab.Screen name="Experts" component={Experts} />
      <TopTab.Screen name="Services" component={Services} />
    </TopTab.Navigator>
  );
};

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: Colors.secondary,
          height: 70,
        },
        headerTintColor: Colors.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.accent,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: Colors.secondary,
          borderTopColor: Colors.secondary,
          borderRadius: 15,
          borderColor: Colors.accent,
          paddingBottom: 10,
          height: 70,
        },
      }}>
      <BottomTab.Screen
        name="HOME"
        component={Home}
        options={{
          headerTransparent: true,
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="EXPLORE"
        component={TopTabNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Icon name="search" size={size} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="PROFILE"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Icon name="user" size={size} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppStack;
