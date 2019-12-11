import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import CinemaDetails from '../../components/CinemaDetails';
import CinemaMovies from '../../components/CinemaMovies';
import * as cinemaService from '../../services/cinemaService';
import * as movieService from '../../services/movieService';


export default class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaName: '',
      cinemaDescription: '',
      cinemaAddress: '',
      cinemaCity: '',
      cinemaPhone: '',
      cinemaWebsite: '',
      cinemaMovies: '',
      moviesLoaded: false
    };
  }

  async componentDidMount() {
    await this.getCinemaInfo();
  }

  async getCinemaInfo() {
    try {
      const cinema = await cinemaService.getCinemaById(this.props.navigation.state.params.id);
      this.setState({ cinemaName: cinema.name });
      this.setState({ cinemaDescription: cinema.description });
      this.setState({ cinemaAddress: cinema.address });
      this.setState({ cinemaCity: cinema.city });
      this.setState({ cinemaPhone: cinema.phone });
      this.setState({ cinemaWebsite: cinema.website });
      this.setState({
        moviesLoaded: true,
        cinemaMovies: await movieService.getMoviesByCinemaId(this.props.navigation.state.params.id)
      })
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }

  render() {
    if (this.state.moviesLoaded === false) { return (<View><Text>Loading...</Text></View>) }
    return (
      <View>
        <CinemaDetails
          cinemaName={this.state.cinemaName}
          cinemaDescription={this.state.cinemaDescription}
          cinemaAddress={this.state.cinemaAddress}
          cinemaCity={this.state.cinemaCity}
          cinemaPhone={this.state.cinemaPhone}
          cinemaWebsite={this.state.cinemaWebsite}
        />
        <CinemaMovies
          cinemaMovies={this.state.cinemaMovies}
          cinemaId={this.props.navigation.state.params.id}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}
