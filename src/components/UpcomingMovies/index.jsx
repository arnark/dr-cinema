import React from 'react';
import { View, FlatList, Text } from 'react-native';
import UpcomingMovieThumbnail from '../UpcomingMovieThumbnail';


const MovieList = ({ movies }) => (
  <View style= {{ backgroundColor: '#bbbfbf'}}>
    <FlatList
      numColumns={1}
      data={movies}
      renderItem={({
        item
      }) => (
        <UpcomingMovieThumbnail
          item={item}
        />
      )}
      keyExtractor={(movies) => movies.id.toString()}
    />
  </View>
);

export default MovieList;
