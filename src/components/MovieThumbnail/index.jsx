import React from 'react';
import {
  Text, TouchableOpacity, Image, View, Linking
} from 'react-native';
import styles from './styles';


const MovieThumbnail = ({ mongoId, title, poster, year, genreString, cinemaId, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('MovieDetail', {
        mongoId, cinemaId
      });
    }}
    style={styles.container}
  >
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}{' ('}{year}{')'}</Text>
      <Text style={styles.release}>{genreString}</Text>
    </View>
    <View style={styles.imageContainer}>
      <Image
        style={{ width: 100, height: 90 }}
        source={{ uri: poster }}
      />
    </View>
  </TouchableOpacity>
);

export default MovieThumbnail;
