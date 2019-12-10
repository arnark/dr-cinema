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
          id, name
        }
      }) => (
        <CinemaThumbnail
          name={name}
          id={id}
        />
      )}
      keyExtractor={(movies) => movies.id.toString()}
    />
  </View>
);

export default CinemaList;
