import React, {Component} from 'react';
import { View, Text, ToolbarAndroid } from 'react-native';
import styles, { pallete } from '../../styles.js';

class About extends Component {
  render() {
    return (
      <View style={styles.fillContainer}>
        <ToolbarAndroid
          style={styles.toolbar}
          title={this.props.title}
          navIcon={require('./imgs/back.png')}
          onIconClicked={this.props.navigator.pop}
          titleColor={pallete.black}/>
        <Text style={styles.light}>About me!</Text>
      </View>
    );
  }
}

export default About;