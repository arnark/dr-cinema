import React from 'react';
import {
  Text, Image, View
} from 'react-native';


const MovieInfo = ({ movieTitle, moviePoster, moviePlot, movieDuration, movieYear, movieGenres }) => (
  <View>
    <Text>{movieTitle}</Text>
    <Image source={{ uri: moviePoster }} style={{ width: 300, height: 400 }} />
    <Text>{moviePlot}</Text>
    <Text>{movieDuration}</Text>
    <Text>{movieYear}</Text>
    <Text>{movieGenres}</Text>
  </View>
);

export default MovieInfo;
