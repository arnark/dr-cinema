import React from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import * as movieService from '../../services/movieService';


export default class MovieTicketInfo extends React.Component {
  async componentDidMount() {
    await this.getShows();
  }

  render() {
    return (
      <View>
        <FlatList
          numColumns={1}
          data={this.props.shows[0]}
          renderItem={({
            item: {
              purchase_url, time
            }
          }) => (
            <View>
              <Text> {purchase_url} </Text>
              <Text> {time} </Text>
            </View>
          )}
          keyExtractor={(purchase_url) => purchase_url}
        />
      </View>
    )
  }
}
