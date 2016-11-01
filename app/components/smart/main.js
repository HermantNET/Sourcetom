import React, {
  Component
} from 'react';
import {
  Navigator
} from 'react-native';

// Components
import Home from '../dumb/Home.js';
import About from '../dumb/About.js';
import Layout from '../smart/Layout.js';
import Contact from '../dumb/Contact.js';
import Code from '../dumb/Code.js';

export default class Main extends Component {
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'about':
        return (<Layout navigator={navigator} title="About"><About /></Layout>);
      case 'contact':
        return (<Layout navigator={navigator} title="Contact"><Contact /></Layout>);
      case 'code':
        return (<Layout navigator={navigator} title="Code"><Code /></Layout>);
      default:
        return (<Home navigator={navigator} title="Home" />);
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        renderScene={this.navigatorRenderScene}
        />
    );
  }
}