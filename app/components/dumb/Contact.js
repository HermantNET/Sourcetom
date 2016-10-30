import React, { Component } from 'react';
import { ScrollView, View, Text, ToolbarAndroid, Image } from 'react-native';
import styles, { pallete } from '../../styles.js';
import Toolbar from './Toolbar.js';

class Contact extends Component {
  render() {
    // When inheriting styles, if the first item declares a different style it will not work for that item. To fix use inline style.
    return (
      <ScrollView style={styles.fillContainer}>
        <Toolbar title={this.props.title} navigator={this.props.navigator} />
        <Image source={require('./imgs/laptopFade6.jpg')} style={styles.contactImageBox}>
          <Text style={styles.headingDefault}>Contact</Text>
          <Text style={styles.subHeading}>Available Platforms</Text>
          <View style={styles.iconBox}>
            <Image source={require('./imgs/phone.png')} style={styles.iconImage}></Image>
            <Image source={require('./imgs/email.png')} style={styles.iconImage}></Image>
            <Image source={require('./imgs/skype.png')} style={styles.iconImage}></Image>
            <Image source={require('./imgs/twitter.png')} style={styles.iconImage}></Image>
          </View>
        </Image>
        <View style={styles.whiteBox}>
          <Text style={styles.textDefault}>
            <Text style={{lineHeight: 0}}>{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Phone: </Text>+1 (941) 321-3860{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Email: </Text>thomas@tehjr.com{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Skype: </Text>hermant.edu@gmail.com{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Email: </Text>thomas@tehjr.com{"\n"}</Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Contact;