import React, {Component} from 'react';
import { View, Text, ToolbarAndroid, Image } from 'react-native';
import styles, { pallete } from '../../styles.js';
import Toolbar from './Toolbar.js';

class Contact extends Component {
  render() {
    return (
      <View style={styles.fillContainer}>
        <Toolbar title={this.props.title} navigator={this.props.navigator} />
        <View style={styles.greyBox}>
          <Image source={require('./imgs/phone.png')} style={styles.iconImage}></Image>
          <Image source={require('./imgs/email.png')} style={styles.iconImage}></Image>
          <Image source={require('./imgs/skype.png')} style={styles.iconImage}></Image>
          <Image source={require('./imgs/twitter.png')} style={styles.iconImage}></Image>
        </View>
        <View style={styles.whiteBox}>
          <Text style={styles.textDefault}>HIWIWHI</Text>
        </View>
      </View>
    );
  }
}

export default Contact;