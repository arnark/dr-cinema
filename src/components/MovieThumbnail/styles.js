import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 0.33,
    backgroundColor: '#fff',
    height: 110,
    borderTop: 0.33,
    borderColor: '#ccc'
  },
  textContainer: {
    padding: 5,
    width: 300
  },
  imageContainer: {
    width: 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  release: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  image: {
    marginBottom: 5,
    padding: 10,
    width: 100,
    height: 100
  }
})
