import React from 'react';
import {
  Text, TouchableHighlight, Image, View, Linking
} from 'react-native';
import styles from './styles'


const UpcomingMovieThumbnail = ({ id, name, year, poster }) => (
  <View style={styles.container}>
    <Text style={styles.title}> {name} </Text>
    <Text style={styles.release}> {year} </Text>
    <Image
          style={{width: 100, height: 90}}
          source={{uri: poster.toString()}}
          />
  </View>

);

export default UpcomingMovieThumbnail;
