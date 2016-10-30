import React, {Component} from 'react';
import { View, Text, ToolbarAndroid } from 'react-native';
import styles, { pallete } from '../../styles.js';
import Toolbar from './Toolbar.js';

class Game extends Component {
  render() {
    return (
      <View style={styles.fillContainer}>
        <Toolbar title={this.props.title} navigator={this.props.navigator} />
        <Text style={styles.text}>GAME ON</Text>
      </View>
    );
  }
}

export default Game;