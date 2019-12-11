import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const CinemaDetails = ({ cinemaName, cinemaDescription, cinemaAddress, cinemaCity, cinemaPhone, cinemaWebsite }) => (
  <View style={styles.container}>
    <Text style={styles.cinemaTitle}>{cinemaName}</Text>
    <Text>{cinemaAddress}{' | '}{cinemaCity}{' | '}{cinemaPhone}{' | '}{cinemaWebsite}</Text>
    <Text style={styles.cinemaDescription}>{cinemaDescription}</Text>
  </View>
);

export default CinemaDetails;
