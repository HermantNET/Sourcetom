import React, {
  Component
} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Animated,
  Easing
} from 'react-native';
import styles, {
  pallete
} from '../../styles.js';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinValue: new Animated.Value(0),
      bounceValue: new Animated.Value(0),
      translateValue: new Animated.Value(350)
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(
        this.state.spinValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.InOut
        }),
      Animated.spring(
        this.state.bounceValue, {
          toValue: 1,
          friction: 1.5
        }),
      Animated.timing(
        this.state.translateValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.Out
        })
    ]).start();
  }

  navAbout() {
    this.props.navigator.push({
      id: 'about'
    });
  }
  navContact() {
    this.props.navigator.push({
      id: 'contact'
    });
  }
  navCode() {
    this.props.navigator.push({
      id: 'code'
    });
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    });

    return (
      <View style={styles.imageContainer}>
        <Image style={styles.jumbotron} source={require('./imgs/tri.png')}>
          <Animated.Image source={require('./imgs/Tom.png')} style={{
            transform: [
              {rotateZ: spin},
              {scale: this.state.bounceValue}
            ]
          }} />
          <Animated.Text style={[ styles.title, { transform: [{ scale: this.state.bounceValue }] } ]}>Sourcetom</Animated.Text>

        </Image>
        <Animated.View style={[styles.buttonsContainer, { transform: [{ translateY: this.state.translateValue }] } ]}>
          <TouchableHighlight style={styles.button} onPress={this.navAbout.bind(this)} underlayColor={pallete.darkest}>
            <Text style={styles.light}>About</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.navContact.bind(this)} underlayColor={pallete.darkest}>
            <Text style={styles.light}>Contact</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.navCode.bind(this)} underlayColor={pallete.darkest}>
            <Text style={styles.light}>Code</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

export default Home;