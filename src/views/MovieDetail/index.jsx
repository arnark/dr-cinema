import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import * as movieService from '../../services/movieService';
import MovieInfo from '../../components/MovieInfo';
import MovieTicketInfo from '../../components/MovieTicketInfo';


export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieMongoId: '',
      movieTitle: '',
      moviePoster: '',
      moviePlot: '',
      movieDuration: '',
      movieYear: '',
      movieGenres: ''
    };
  }

  async componentDidMount() {
    await this.getMovieDetails();
  }

  async getMovieDetails() {
    try {
      const movie = await movieService.getMovieByMongoId('5def5583f9d1515cff5fac5a')
      this.setState({ movieMongoId: movie[0]._id });
      this.setState({ movieTitle: movie[0].title });
      this.setState({ moviePoster: movie[0].poster });
      this.setState({ moviePlot: movie[0].plot });
      this.setState({ movieDuration: movie[0].durationMinutes });
      this.setState({ movieYear: movie[0].year });
      this.setState({ movieGenres: await movieService.getGenreString(movie[0].genres) });
      console.log(movie[0])
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }

  render() {
    return (
      <View>
        <MovieInfo
          movieTitle={this.state.movieTitle}
          moviePoster={this.state.moviePoster}
          moviePlot={this.state.moviePlot}
          movieDuration={this.state.movieDuration}
          movieYear={this.state.movieYear}
          movieGenres={this.state.movieGenres}
        />
        <MovieTicketInfo
          movieId={this.state.movieMongoId}
          cinemaId={1}
        />
      </View>
    )
  }
}
