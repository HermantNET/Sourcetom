import React, { Component } from 'react';
import { ScrollView, View, Text, ToolbarAndroid, Image } from 'react-native';
import styles, { pallete } from '../../styles.js';
import LogosAndInfo from './LogosAndInfo.js';

class Contact extends Component {
  render() {
    // When inheriting styles, if the first item declares a different style it will not work for that item. To fix use inline style.
    return (
      <LogosAndInfo 
        title="Contact" 
        subtitle="Available Platforms"
        backgroundImage={require('./imgs/laptopFade6.jpg')}
        logos={[
          require('./imgs/phone.png'),
          require('./imgs/email.png'),
          require('./imgs/skype.png'),
          require('./imgs/twitter.png')
        ]}>
        <Text style={styles.textDefault}>
            <Text style={{lineHeight: 0}}>{"\n"}</Text>
            
            <Text><Text style={styles.textStrong}>Phone: </Text>+1 (941) 321-3860{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Email: </Text>thomas@tehjr.com{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Skype: </Text>hermant.edu@gmail.com{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Twitter: </Text>@SpacemanThomas{"\n"}</Text>
        </Text>
      </LogosAndInfo>
    );
  }
}

export default Contact;