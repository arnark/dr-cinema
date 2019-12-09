import React from 'react';
import { View, FlatList } from 'react-native';
import CinemaThumbnail from '../CinemaThumbnail';


const CinemaList = ({ cinemas }) => (
  <View>
    <FlatList
      numColumns={1}
      data={cinemas}
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
      keyExtractor={(cinema) => cinema.id.toString()}
    />
  </View>
);

export default CinemaList;
