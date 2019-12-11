import React from 'react';
import {
  Text, TouchableOpacity, Image, View, Linking
} from 'react-native';
import styles from '../UpcomingMovieThumbnail/styles'


const MovieThumbnail = ({ mongoId, title, poster, year, genreString, cinemaId, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('MovieDetail', {
        mongoId, cinemaId
      });
    }}
    style={styles.container}
  >
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.release}>{year}</Text>
    <Text style={styles.release}>{genreString}</Text>
    <Image
      style={{ width: 100, height: 90 }}
      source={{ uri: poster }}
    />
  </TouchableOpacity>
);

export default MovieThumbnail;
