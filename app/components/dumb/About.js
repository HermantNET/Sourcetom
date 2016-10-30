import React, { Component } from 'react';
import { ScrollView, Text, ToolbarAndroid, UIManager, LayoutAnimation, Image } from 'react-native';
import styles, { pallete } from '../../styles.js';
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
    this.setState({ height: heights, numLines: lines });
  }
  render() {
    return (
      <ScrollView style={styles.fillContainer}>
        <Toolbar title={this.props.title} navigator={this.props.navigator} />

        <Image
          source={require('./imgs/bikeFade.jpg')}
          style={{ overflow: 'hidden', resizeMode: 'cover', height: this.state.height[0], width: undefined, padding: 15 }}>
          <Text
            onPress={this.expandContent.bind(this, 0)}
            ellipsizeMode='tail'
            numberOfLines={this.state.numLines[0]}>

            <Text style={styles.headingOnDark}>Who is Tom?{"\n"}</Text>
            <Text style={styles.textOnDark}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repellat ipsum incidunt laborum doloribus mollitia molestias quas optio, fuga sapiente! Quos harum, sapiente, perspiciatis inventore dolorum ratione nemo. Rerum, laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ullam, suscipit. Expedita cupiditate architecto minus officia nisi iste dicta ullam praesentium sint nesciunt, voluptatibus, molestiae maxime illo, beatae quibusdam et?
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repellat ipsum incidunt laborum doloribus mollitia molestias quas optio, fuga sapiente! Quos harum, sapiente, perspiciatis inventore dolorum ratione nemo. Rerum, laudantium.
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repellat ipsum incidunt laborum doloribus mollitia molestias quas optio, fuga sapiente! Quos harum, sapiente, perspiciatis inventore dolorum ratione nemo. Rerum, laudantium.
          </Text>
          </Text>
        </Image>

      </ScrollView>
    );
  }
}

export default About;