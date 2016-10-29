import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles, { pallete } from '../../styles.js';

class Home extends Component {
  navAbout() {
    this.props.navigator.push({
      id: 'about'
    });
  }
  render() {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.imageHead} source={require('./imgs/diamonds.jpg')}>
          <Text style={styles.title}>Sourcetom</Text>
          <TouchableHighlight style={styles.button} onPress={this.navAbout.bind(this)} underlayColor={pallete.purple}>
            <Text>About</Text>
          </TouchableHighlight>
        </Image>
      </View>
    );
  }
}

export default Home;