import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import UpcomingMovies from '../../components/CinemaList';
import * as movieservice from '../../services/movieService';
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

  async getCinemas() {
    try {
      const cinemas = await cinemaService.getUpcomingMovies();
      this.setState({ cinemas });
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
