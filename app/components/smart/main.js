import React, { Component } from 'react';
import { Navigator } from 'react-native';

// Components
import Home from '../dumb/Home.js';
import About from '../dumb/About.js';
import Contact from '../dumb/Contact.js';
import Game from '../dumb/Game.js';

export default class Main extends Component {
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'about':
        return (<About navigator={navigator} title="About" />);
      case 'contact':
        return (<Contact navigator={navigator} title="Contact" />);
      case 'game':
        return (<Game navigator={navigator} title="Game" />);      
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