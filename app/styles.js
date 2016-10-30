import { StyleSheet } from 'react-native';

export const pallete = {
  white: '#fff',
  strong: '#282828',
  base: '#777777',
  grey: '#b1c4d1',
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
    backgroundColor: pallete.black
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
    justifyContent: 'center',
    backgroundColor: pallete.white
  },
  title: {
    margin: 5,
    color: pallete.white,
    fontFamily: 'latoRegular',
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
  textOnDark: {
    color: pallete.grey
  },
  textDefault: {
    color: pallete.base
  },
  heading: {
    color: pallete.white,
    fontSize: 30,
    fontFamily: 'latoRegular'
  },
  greyBox: {
    flex: 1,
    backgroundColor: pallete.grey,
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: pallete.highlight
  },
  whiteBox: {
    flex: 2,
    backgroundColor: pallete.white,
    padding: 15
  },
  iconImage: {
    height: 64,
    width: 64
  }
});

export default styles;