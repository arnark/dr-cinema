import React from 'react';
import {
  Text, TouchableHighlight, Image, View, Linking
} from 'react-native';
import styles from './styles'


const UpcomingMovieThumbnail = ({ id, name, year, poster }) => (
  <View style={styles.container}>
    <Text style={styles.title}> {name} </Text>
    <Text style={styles.release}> {year} </Text>
  </View>

);

export default UpcomingMovieThumbnail;
