import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../../styles.js';

class Home extends Component {
  navAbout() {
    this.props.navigator.push({
      id: 'about'
    });
  }
  render() {
    return (
      <View style={styles.imageContainer}>
        <Image source={require('./imgs/diamonds.jpg')} style={styles.imageHead}>
          <Text style={styles.title}>Sourcetom</Text>
          <TouchableHighlight onPress={this.navAbout.bind(this)}>
            <Text>About</Text>
          </TouchableHighlight>
        </Image>
      </View>
    );
  }
}

export default Home;