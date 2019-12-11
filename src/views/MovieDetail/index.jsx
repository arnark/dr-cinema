import React from 'react';
import { ScrollView, View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import * as movieService from '../../services/movieService';
import MovieInfo from '../../components/MovieInfo';
import MovieTicketInfo from '../../components/MovieTicketInfo';


export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: '',
      moviePoster: '',
      moviePlot: '',
      movieDuration: '',
      movieYear: '',
      movieGenres: '',
      shows: '',
      showsLoaded: false
    };
  }

  async componentDidMount() {
    await this.getMovieDetails();
  }

  async getMovieDetails() {
    try {
      const movie = await movieService.getMovieByMongoId(this.props.navigation.state.params.mongoId)
      this.setState({ movieTitle: movie[0].title });
      this.setState({ moviePoster: movie[0].poster });
      this.setState({ moviePlot: movie[0].plot });
      this.setState({ movieDuration: movie[0].durationMinutes });
      this.setState({ movieYear: movie[0].year });
      this.setState({ movieGenres: await movieService.getGenreString(movie[0].genres) });
      this.setState({
        showsLoaded: true,
        shows: await movieService.getShowsByCinemaAndMovie(
          this.props.navigation.state.params.cinemaId,
          this.props.navigation.state.params.mongoId
        )
      })
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }

  render() {
    if (this.state.showsLoaded === false) {
      return (<View><Text>Loading...</Text></View>)
    }
    return (
      <ScrollView>
        <MovieInfo
          movieTitle={this.state.movieTitle}
          moviePoster={this.state.moviePoster}
          moviePlot={this.state.moviePlot}
          movieDuration={this.state.movieDuration}
          movieYear={this.state.movieYear}
          movieGenres={this.state.movieGenres}
        />
        <MovieTicketInfo
          shows={this.state.shows}
        />
      </ScrollView>
    )
  }
}
