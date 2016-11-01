import React, {
  Component
} from 'react';
import {
  ScrollView,
  Text,
  ToolbarAndroid,
  UIManager,
  LayoutAnimation,
  Image
} from 'react-native';
import styles, {
  pallete
} from '../../styles.js';
import Toolbar from './Toolbar.js';

class About extends Component {
  constructor(props) {
    super(props);
    // Enable LayoutAnimation
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = {
      height: [300, 100, 100],
      numLines: [15, 3, 3]
    }
  }
  componentWillMount() {
      LayoutAnimation.spring();
    }
    // TODO make dynamic
  expandContent(index) {
    var heights = [100, 100, 100];
    var lines = [3, 3, 3];
    heights[index] = 300;
    lines[index] = 15;
    LayoutAnimation.spring();
    this.setState({
      height: heights,
      numLines: lines
    });
  }
  render() {
    return (
      <ScrollView style={styles.fillContainer}>
        <Image
          source={require('./imgs/bikeFade.jpg')}
          style={{ overflow: 'hidden', resizeMode: 'cover', height: this.state.height[0], width: undefined, padding: 15 }}>
          <Text
            onPress={this.expandContent.bind(this, 0)}
            ellipsizeMode='tail'
            numberOfLines={this.state.numLines[0]}>

            <Text style={styles.headingOnDark}>Who is Tom?{"\n"}</Text>
            <Text style={styles.textOnDark}>
              {"\n"}
              When the universe needs saving, who do you call?{"\n"}
              Not Tom.{"\n"}{"\n"}
              When your plumbing busts, what do you need?{"\n"}
              Not Tom.{"\n"}{"\n"}
              When you need advice on what to wear to your date, who do you ask?{"\n"}
              Definently not Tom.{"\n"}{"\n"}
              When you need a React Native developer, who will get the job done?{"\n"}
              Tom.{"\n"}
          </Text>
          </Text>
        </Image>

        <Image source={require('./imgs/breadFade.jpg')}
          style={{ overflow: 'hidden', resizeMode: 'cover', height: this.state.height[1], width: undefined, padding: 15 }}>
          <Text
            onPress={this.expandContent.bind(this, 1)}
            ellipsizeMode='tail'
            numberOfLines={this.state.numLines[1]}>

            <Text style={styles.headingOnDark}>Tom is...{"\n"}</Text>
            <Text style={styles.textOnDark}>
              {"\n"}
              Passionate about the real-time web.{"\n"}{"\n"}
              A JavaScript enthusiast.{"\n"}{"\n"}
              Obsessed with React.{"\n"}{"\n"}
              In love with the current tech scene.{"\n"}{"\n"}
              Always thinking about how he can improve.{"\n"}{"\n"}
          </Text>
          </Text>
        </Image>

        <Image source={require('./imgs/ojFade.jpg')}
          style={{ overflow: 'hidden', resizeMode: 'cover', height: this.state.height[2], width: undefined, padding: 15 }}>
          <Text
            style={{ height: this.state.height[2] }}
            onPress={this.expandContent.bind(this, 2)}
            ellipsizeMode='tail'
            numberOfLines={this.state.numLines[2]}>

            <Text style={styles.headingOnDark}>Tom is Not...{"\n"}</Text>
            <Text style={styles.textOnDark}>
              {"\n"}
              Someone who gives up easily.{"\n"}{"\n"}
              A senior developer.{"\n"}{"\n"}
              An avid gamer ( at least not anymore ;) ).{"\n"}{"\n"}
              A sports fan.{"\n"}{"\n"}
              Unwilling to to learn new things.{"\n"}{"\n"}
              Scared of change.{"\n"}{"\n"}
          </Text>
          </Text>
        </Image>
      </ScrollView>
    );
  }
}

export default About;