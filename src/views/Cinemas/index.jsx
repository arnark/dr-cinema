import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import * as movieActions from '../../actions/movieActions';


class Cinemas extends React.Component {
  componentDidMount() {
    // this.props.getAllMovies();
  }

  render() {
    // console.log(this.props.getAllMovies())

    async function getData() {
      try {
        console.log(await movieActions.getAllMovies)
        // return await movieService.getAllMovies.promise()
      } catch (error) {
        console.log("error" + error);
      } finally {
        console.log('done');
      }
    }

    getData()

    return (
      <View>
        <Text>Yes</Text>
      </View>
    )
  }
}

export default connect(null)(Cinemas);
