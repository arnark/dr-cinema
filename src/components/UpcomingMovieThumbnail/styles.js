import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'white',
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
