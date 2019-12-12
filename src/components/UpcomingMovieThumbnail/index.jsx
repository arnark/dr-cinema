import React from 'react';
import {
  Text, TouchableHighlight, Image, View, Linking
} from 'react-native';
import styles from './styles'


const UpcomingMovieThumbnail = ({ title, ReleaseDate, poster }) => (
  <View style={styles.container}>
    <Text style={styles.title}> {title} </Text>
    <Text style={styles.release}> {ReleaseDate} </Text>
    <Image
          style={{width: 100, height: 90}}
          source={{uri: poster.toString()}}
          />
  </View>

);

export default UpcomingMovieThumbnail;
