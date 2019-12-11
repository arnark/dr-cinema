import React from 'react';
import { View, TouchableOpacity, TextInput, Button, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CinemaList from '../../components/CinemaList';
import NavigationButton from '../../components/CinemaListButton'
import * as cinemaService from '../../services/cinemaService';


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
      <View style ={{flex:1}}>
      <ScrollView>
        <CinemaList
          cinemas={this.state.cinemas}
          navigation={this.props.navigation}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => { this.props.navigation.navigate('UpcomingMovies')}}
        >
        <NavigationButton/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null)(Cinemas);
