import React from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import UpcomingMovies from '../../components/UpcomingMovies';
import * as movieservice from '../../services/movieService';
import styles from './styles'
// import * as movieActions from '../../actions/movieActions';


class Upcomingmovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    await this.getUpcomingMovies();
  }

  async getUpcomingMovies() {
    try {
      const movies = await movieservice.getUpcomingMovies();
      console.log('halló')
      this.setState({ movies });
      console.log(movies[4]["release-dateIS"])
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }

  render() {
    return (
      <View>
        <UpcomingMovies
          movies={this.state.movies}
        />
      </View>
    )
  }
}

export default connect(null)(Upcomingmovies);
