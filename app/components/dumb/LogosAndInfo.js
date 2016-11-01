import React, {
  Component
} from 'react';
import {
  ScrollView,
  View,
  Text,
  ToolbarAndroid,
  Image,
  Animated,
  Easing
} from 'react-native';
import styles, {
  pallete
} from '../../styles.js';
import Toolbar from './Toolbar.js';

class LogosAndInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacityVal: new Animated.Value(0)
    };
  }
  static propTypes() {
    return {
      backgroundImage: React.PropTypes.func,
      title: React.PropTypes.string,
      subtitle: React.PropTypes.string,
      logos: React.PropTypes.array
    }
  }
  componentDidMount() {
    Animated.timing(
      this.state.opacityVal, {
        toValue: 1,
        duration: 1000,
        easing: Easing.InOut
    }).start();
  }
  render() {
    // When inheriting styles, if the first item declares a different style it will not work for that item. To fix use inline style. 
    return (
      <ScrollView style={styles.fillContainer}>
        <Image source={this.props.backgroundImage} style={styles.contactImageBox}>
          <Text style={styles.headingDefault}>{this.props.title}</Text>
          <Text style={styles.subHeading}>{this.props.subtitle}</Text>
          <View style={styles.iconBox}>
            {this.props.logos.map((logo, index) => <Animated.Image
                                                    source={logo} 
                                                    style={[styles.iconImage, {
                                                     opacity: this.state.opacityVal
                                                    }]} 
                                                    key={index} />)}
          </View>
        </Image>
        <View style={styles.whiteBox}>
          {this.props.children}
        </View>
      </ScrollView>
    );
  }
}

export default LogosAndInfo;