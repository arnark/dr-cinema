import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 10
  },
  movieTitle: {
    fontSize: 26,
    paddingBottom: 5,
    fontWeight: 'bold',
    flex: 1
  },
  moviePoster: {
    alignSelf: 'stretch',
    height: 350,
    flex: 1
  },
  movieGenres: {
    paddingBottom: 5,
    flex: 1
  },
  movieDuration: {
    paddingBottom: 5,
    flex: 1
  },
  moviePlot: {
    paddingTop: 10,
    flex: 1,
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
    paddingBottom: 10
  }
})
