import React from 'react';
import { View, FlatList } from 'react-native';
import UpcomingMovieThumbnail from '../UpcomingMovieThumbnail';


const MovieList = ({ movies }) => (
  <View style= {{ backgroundColor: '#bbbfbf'}}>
    <FlatList
      numColumns={1}
      data={movies}
      renderItem={({
        item: {
          id, title, year, poster
        }
      }) => (
        <UpcomingMovieThumbnail
          name={title}
          id={id}
          year={year}
          poster={poster}
        />
      )}
      keyExtractor={(movies) => movies.id.toString()}
    />
  </View>
);

export default MovieList;
