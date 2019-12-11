import React from 'react';
import { View, FlatList } from 'react-native';
import CinemaThumbnail from '../CinemaThumbnail';


const CinemaList = ({ cinemas, navigation }) => (
  <View style= {{ backgroundColor: '#bbbfbf'}}>
    <FlatList
      numColumns={1}
      data={cinemas.sort((a,b) => a.name.localeCompare(b.name))}
      renderItem={({
        item: {
          id, name, website
        }
      }) => (
        <CinemaThumbnail
          name={name}
          id={id}
          website={website}
          navigation={navigation}
        />
      )}
      keyExtractor={(cinema) => cinema.id.toString()}
    />
  </View>
);

export default CinemaList;
