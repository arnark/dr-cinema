import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import * as cinemaService from '../../services/cinemaService';


export default class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaName: ''
    };
  }

  async componentDidMount() {
    await this.getCinemaInfo();
  }

  async getCinemaInfo() {
    try {
      const cinema = await cinemaService.getCinemaById(this.props.navigation.state.params.id);
      this.setState({ cinemaName: cinema.name });
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.cinemaName}</Text>
      </View>
    )
  }
}
