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
          id, name, website
        }
      }) => (
        <CinemaThumbnail
          name={name}
          id={id}
          website={website}
        />
      )}
      keyExtractor={(cinema) => cinema.id.toString()}
    />
  </View>
);

export default CinemaList;
