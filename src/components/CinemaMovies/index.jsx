import React from 'react';
import { View, FlatList, Text } from 'react-native';
import MovieThumbnail from '../MovieThumbnail';

const CinemaMovies = ({ cinemaMovies, cinemaId, navigation }) => (
  <View style={{ backgroundColor: '#bbbfbf' }}>
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
      keyExtractor={(_id) => _id}
    />
  </View>
);

export default CinemaMovies;
