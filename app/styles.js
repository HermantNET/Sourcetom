import { StyleSheet } from 'react-native';

export const pallete = {
  white: '#fff',
  strong: '#282828',
  base: '#777777',
  grey: '#a2b1bf',
  highlight: '#84bd00',
  dark: '#658d1b',
  darkest: '#415A12',
  black: '#161616',
  purple: '#9B287B',
  link: 'blue'
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  fillContainer: {
    flex: 1,
    backgroundColor: pallete.white
  },
  toolbar: {
    backgroundColor: pallete.dark,
    height: 56
  },
  light: {
    color: pallete.white
  },
  jumbotron: {
    flex: 2,
    width: undefined,
    height: undefined,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    borderBottomWidth: 4,
    borderColor: pallete.highlight
  },
  buttonsContainer: {
    paddingTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    margin: 5,
    color: pallete.white,
    fontFamily: 'latoBold',
    fontSize: 50,
    textShadowColor: pallete.black,
    textShadowRadius: 5,
    textShadowOffset: { width: 2, height: 2 }
  },
  button: {
    flex: 0,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: pallete.dark,
    padding: 10,
    width: 150,
    elevation: 3
  },
  text: {
    color: pallete.base
  },
  heading: {
    color: pallete.strong
  }
});

export default styles;