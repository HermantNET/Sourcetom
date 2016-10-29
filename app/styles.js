import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  toolbar: {
    backgroundColor: 'grey',
    height: 56
  },
  imageHead: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  title: {
    color: 'white',
    fontFamily: 'latoBold',
    fontSize: 50,
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: { width: 2, height: 2 }
  },
  button: {
    
  }
});

export default styles;