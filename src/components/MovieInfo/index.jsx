import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';


const MovieInfo = ({ movieTitle, moviePoster, moviePlot, movieDuration, movieYear, movieGenres }) => (
  <View style={styles.container}>
    <Text style={styles.movieTitle}>{movieTitle}{' ('}{movieYear}{')'}</Text>
    <Text style={styles.movieDuration}>{movieDuration}{'min'}</Text>
    <Text style={styles.movieGenres}>{movieGenres}</Text>
    <Image source={{ uri: moviePoster }} style={styles.moviePoster} />
    <Text style={styles.moviePlot}>{moviePlot}</Text>
  </View>
);

export default MovieInfo;
