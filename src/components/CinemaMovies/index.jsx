import React from 'react';
import { View, FlatList, Text } from 'react-native';
import MovieThumbnail from '../MovieThumbnail';
import styles from './styles';


const CinemaMovies = ({ cinemaMovies, cinemaId, navigation }) => (
  <View>
    <Text style={styles.moviesTitle}>Bíómyndir</Text>
    <FlatList
      numColumns={1}
      data={cinemaMovies}
      renderItem={({
        item: {
          _id, title, poster, year, genreString
        }
      }) => (
        <MovieThumbnail
          mongoId={_id}
          title={title}
          poster={poster}
          year={year}
          genreString={genreString}
          cinemaId={cinemaId}
          navigation={navigation}
        />
      )}
    />
  </View>
);

export default CinemaMovies;
