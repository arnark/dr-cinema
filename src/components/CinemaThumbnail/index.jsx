import React from 'react';
import {
  Text, TouchableHighlight, Image, View
} from 'react-native';


const CinemaThumbnail = ({ id, name }) => (
  <View>
    <Text>
      {name}
    </Text>
  </View>
);

export default CinemaThumbnail;
