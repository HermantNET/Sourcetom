import React, {Component} from 'react';
import { View, Text, ToolbarAndroid } from 'react-native';
import styles, { pallete } from '../../styles.js';
import Toolbar from './Toolbar.js';
import LogosAndInfo from './LogosAndInfo.js';

class Code extends Component {
  render() {
    return (
      <View style={styles.fillContainer}>
        <Toolbar title={this.props.title} navigator={this.props.navigator} />
        <LogosAndInfo
        	backgroundImage={require('./imgs/laptopFade6.jpg')} 
        	title="Tom's Code" 
        	subtitle="Places Tom puts his code:" 
        	logos={[require('./imgs/github.png'), require('./imgs/codewars.png'), require('./imgs/codepen.png')]} />
      </View>
    );
  }
}

export default Code;