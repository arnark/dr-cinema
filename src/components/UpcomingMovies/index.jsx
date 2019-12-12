import React from 'react';
import { View, FlatList, Text } from 'react-native';
import UpcomingMovieThumbnail from '../UpcomingMovieThumbnail';


const MovieList = ({ movies }) => (
  <View style= {{ backgroundColor: '#bbbfbf'}}>
    <FlatList
      numColumns={1}
      data={movies.sort((a,b) => b.ReleaseDate.localeCompare(a.ReleaseDate))}
      renderItem={({
        item:{
          title, ReleaseDate,poster
        }
      }) => (
        <UpcomingMovieThumbnail
          title={title}
          ReleaseDate={ReleaseDate}
          poster={poster}
        />
      )}
      keyExtractor={(movies) => movies.id.toString()}
    />
  </View>
);

export default MovieList;
