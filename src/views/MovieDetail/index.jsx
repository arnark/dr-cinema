import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import * as movieService from '../../services/movieService';


export default class Cinemas extends React.Component {
    componentDidMount() {
        this.props.getAllMovies();
    }
    render() {
      console.log(this.props.getAllMovies());
        return (
            <View>
              <Text>Yes</Text>
            </View>
        )
    }
}
