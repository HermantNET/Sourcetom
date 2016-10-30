import React, {Component} from 'react';
import { View, ToolbarAndroid } from 'react-native';
import styles, { pallete } from '../../styles.js';

class Toolbar extends Component {
  render() {
    return (
        <ToolbarAndroid
          style={styles.toolbar}
          title={this.props.title}
          navIcon={require('./imgs/back.png')}
          onIconClicked={this.props.navigator.pop}
          titleColor={pallete.white}/>
    );
  }
}

export default Toolbar;