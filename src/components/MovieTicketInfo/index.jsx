import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as movieService from '../../services/movieService';


export default class MovieTicketInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieShows: ''
    };
  }

  async componentDidMount() {
    await this.getShows();
  }

  async getShows() {
    try {
      const shows = await movieService.getShowsByCinemaAndMovie(1, 1);
      this.setState({ movieShows: shows });
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }

  render() {
    return (
      <View>
        <Text>{this.props.cinemaId}</Text>
      </View>
    )
  }
}
