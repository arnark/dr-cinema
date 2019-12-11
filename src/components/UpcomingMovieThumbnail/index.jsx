import React from 'react';
import {
  Text, TouchableHighlight, Image, View, Linking
} from 'react-native';
import styles from './styles'


const UpcomingMovieThumbnail = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.title}> {item.title} </Text>
    <Text style={styles.release}> {item[["release-dateIS"]]} </Text>
    <Image
          style={{width: 100, height: 90}}
          source={{uri: item.poster.toString()}}
          />
  </View>

);

export default UpcomingMovieThumbnail;
