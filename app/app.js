import React, { Component } from 'react';
import { Navigator } from 'react-native';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Store

// Components
import Home from './components/dumb/Home.js';
import About from './components/dumb/About.js';

export default class App extends Component {
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'about':
        return (<About navigator={navigator} title="about" />);
      default:
        return (<Home navigator={navigator} title="home" />);
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