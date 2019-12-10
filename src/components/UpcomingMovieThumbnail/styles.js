import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    color: 'blue',
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: '#bbbfbf',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100

  },

  title: {
  fontSize: 16,
  flex: 1
},

  release: {
    flex: 1,
    fontStyle: 'italic',
    fontSize: 16,
  }
})
