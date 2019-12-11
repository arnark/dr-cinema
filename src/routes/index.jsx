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
    screen: Cinemas,
    navigationOptions: () => ({
      title: 'Cinemas',
    }),
  },
  CinemaDetail: {
    screen: CinemaDetail,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton onPress={() => { navigation.goBack(); }} title=" " tintColor="#000" backTitleVisible />
    }),
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton onPress={() => { navigation.goBack(); }} title=" " tintColor="#000" backTitleVisible />
    }),
  },
  UpcomingMovies: {
    screen: UpcomingMovies,
    navigationOptions: ({ navigation }) => ({
      title: 'UpcomingMovies',
      headerLeft: <HeaderBackButton onPress={() => { navigation.goBack(); }} title=" " tintColor="#000" backTitleVisible />
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
      justifyContent: "center",
      alignSelf: "center",
    },
    initialRouteName: 'Cinemas',
  },
}));
