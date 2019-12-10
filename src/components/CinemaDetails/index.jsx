import React from 'react';
import { View, Text } from 'react-native';


const CinemaDetails = ({ cinemaName, cinemaDescription, cinemaAddress, cinemaCity, cinemaPhone, cinemaWebsite }) => (
  <View>
    <Text>{cinemaName}</Text>
    <Text>{cinemaDescription}</Text>
    <Text>{cinemaAddress}</Text>
    <Text>{cinemaCity}</Text>
    <Text>{cinemaPhone}</Text>
    <Text>{cinemaWebsite}</Text>
  </View>
);

export default CinemaDetails;
