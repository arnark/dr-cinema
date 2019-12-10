import React from 'react';
import { createAppContainer } from 'react-navigation';
import { HeaderBackButton, createStackNavigator } from 'react-navigation-stack';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';

import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import MovieDetail from '../views/MovieDetail';
import UpcomingMovies from '../views/UpcomingMovies';


export default createAppContainer(createStackNavigator({
  Cinemas: {
    screen: UpcomingMovies,
    navigationOptions: () => ({
      title: 'UpcomingMovies',
    }),
  },
  CinemaDetail: {
    screen: CinemaDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Cinema',
      headerLeft: <HeaderBackButton onPress={() => { navigation.goBack(); }} title="Cinemas" tintColor="#000" backTitleVisible />
    }),
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Movie',
      headerLeft: <HeaderBackButton onPress={() => { navigation.goBack(); }} title="Cinema" tintColor="#000" backTitleVisible />
    }),
  },
  UpcomingMovies: {
    screen: UpcomingMovies,
    navigationOptions: ({ navigation }) => ({
      title: 'Upcoming Movies',
      headerLeft: <HeaderBackButton onPress={() => { navigation.goBack(); }} title="????????????" tintColor="#000" backTitleVisible />
    }),
  }
},
{
   /*The header config from HomeScreen is now here*/
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      flex: 1,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    initialRouteName: 'Cinemas',
  },
}));
