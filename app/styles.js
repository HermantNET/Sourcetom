import { StyleSheet } from 'react-native';

export const pallete = {
  black: '#151515',
  blue: '#531CB3',
  pink: '#FF99C9',
  white: '#F4F7F5',
  red: '#EF6461',
  purple: '#9B287B'
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  fillContainer: {
    flex: 1,
    backgroundColor: pallete.black
  },
  toolbar: {
    backgroundColor: pallete.purple,
    height: 56
  },
  light: {
    color: pallete.white
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
    color: pallete.white,
    fontFamily: 'latoBold',
    fontSize: 50,
    textShadowColor: pallete.black,
    textShadowRadius: 2,
    textShadowOffset: { width: 2, height: 2 }
  },
  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: pallete.white,
    borderRadius: 5,
    padding: 10,
    width: 150,
    elevation: 3
  }
});

export default styles;