import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import CinemaList from '../../components/CinemaList';
import * as cinemaService from '../../services/cinemaService';
// import * as movieActions from '../../actions/movieActions';


class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemas: []
    };
  }

  async componentDidMount() {
    await this.getCinemas();
  }

  async getCinemas() {
    try {
      const cinemas = await cinemaService.getAllCinemas();
      this.setState({ cinemas });
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }

  render() {
    return (
      <View>
        <CinemaList
          cinemas={this.state.cinemas}
        />
      </View>
    )
  }
}

export default connect(null)(Cinemas);
