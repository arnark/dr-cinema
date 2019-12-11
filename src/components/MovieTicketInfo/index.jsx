import React from 'react';
import { View, Text, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class MovieTicketInfo extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.buyTicketTitle}>Kaupa miða</Text>
        <FlatList
          numColumns={1}
          data={this.props.shows[0]}
          renderItem={({
            item: {
              purchase_url, time
            }
          }) => (
            <TouchableOpacity style={styles.ticketBuyButton}>
              <Text
                style={styles.btnText}
                onPress={() => Linking.openURL(purchase_url)}>{time}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(purchase_url, index) => index.toString()}
        />
      </View>
    )
  }
}
