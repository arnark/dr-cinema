import React from 'react';
import {
  Text, TouchableHighlight, Image, View, Linking
} from 'react-native';
import styles from './styles';


const CinemaThumbnail = ({ id, name, website, navigation }) => (
  <TouchableHighlight
    onPress={() => {
      navigation.navigate('CinemaDetail', {
        id
      });
    }}
    navigation={navigation}
  >
    <View style={styles.container}>
      <Text style={styles.cinema}>{name}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(`http://${website}`)}> {website} </Text>
    </View>
  </TouchableHighlight>
);

export default CinemaThumbnail;
