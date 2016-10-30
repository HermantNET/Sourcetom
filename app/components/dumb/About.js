import React, {Component} from 'react';
import { View, Text, ToolbarAndroid } from 'react-native';
import styles, { pallete } from '../../styles.js';
import Toolbar from './Toolbar.js';

class About extends Component {
  render() {
    return (
      <View style={styles.fillContainer}>
        <Toolbar title={this.props.title} navigator={this.props.navigator} />
        <view>
        
        </view>
        <view>
        
        </view>
        <view>
        
        </view>
      </View>
    );
  }
}

export default About;