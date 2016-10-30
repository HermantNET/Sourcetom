import React, { Component } from 'react';
import { ScrollView, View, Text, ToolbarAndroid, Image } from 'react-native';
import styles, { pallete } from '../../styles.js';
import Toolbar from './Toolbar.js';

class LogosAndInfo extends Component {
  static propTypes() {
    return {
      backgroundImage: React.PropTypes.func,
      title: React.PropTypes.string,
      subtitle: React.PropTypes.string,
      logos: React.PropTypes.array
    }
  }
  render() {
    // When inheriting styles, if the first item declares a different style it will not work for that item. To fix use inline style. 
    return (
      <ScrollView style={styles.fillContainer}>
        <Image source={this.props.backgroundImage} style={styles.contactImageBox}>
          <Text style={styles.headingDefault}>{this.props.title}</Text>
          <Text style={styles.subHeading}>{this.props.subtitle}</Text>
          <View style={styles.iconBox}>
            {this.props.logos.map((logo) => <Image source={logo} style={styles.iconImage} />)}
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

export default LogosAndInfo;