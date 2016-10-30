import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles, { pallete } from '../../styles.js';

class Home extends Component {
  navAbout() {
    this.props.navigator.push({
      id: 'about'
    });
  }
  navContact() {
    this.props.navigator.push({
      id: 'contact'
    });
  }
  navGame() {
    this.props.navigator.push({
      id: 'game'
    });
  }
  render() {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.jumbotron} source={require('./imgs/pattern.jpg')}>
          <Image source={require('./imgs/Tom.png')} />
          <Text style={styles.title}>Sourcetom</Text>

        </Image>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight style={styles.button} onPress={this.navAbout.bind(this)} underlayColor={pallete.darkest}>
            <Text style={styles.light}>About</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.navContact.bind(this)} underlayColor={pallete.darkest}>
            <Text style={styles.light}>Contact</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.navGame.bind(this)} underlayColor={pallete.darkest}>
            <Text style={styles.light}>Game</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Home;