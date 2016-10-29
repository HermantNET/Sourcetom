import React, {Component} from 'react';
import { View, Text, ToolbarAndroid } from 'react-native';
import styles from '../../styles.js';

class About extends Component {
  render() {
    return (
      <View style={styles.imageContainer}>
        <ToolbarAndroid
          style={styles.toolbar}
          title={this.props.title}
          navIcon={require('./imgs/back.png')}
          onIconClicked={this.props.navigator.pop}
          titleColor={'white'}/>
        <Text>About me!</Text>
      </View>
    );
  }
}

export default About;