import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import CinemaDetails from '../../components/CinemaDetails';
import * as cinemaService from '../../services/cinemaService';


export default class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaName: '',
      cinemaDescription: '',
      cinemaAddress: '',
      cinemaCity: '',
      cinemaPhone: '',
      cinemaWebsite: ''
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
      //console.log(cinema);

    } catch (error) {
      console.log(`error: ${error}`);
    }
  }

  render() {
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
      </View>
    )
  }
}
