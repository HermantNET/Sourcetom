import React, {
	Component
} from 'react';
import {
	BackAndroid,
	ScrollView
} from 'react-native';
import Toolbar from '../dumb/Toolbar.js';
import styles from '../../styles.js';

class Layout extends Component {
	BackHandler() {
		if (this.props.navigator.length < 2) return false;
		else {
			this.props.navigator.pop();
			return true;
		}
	}
	componentDidMount() {
		this.back = this.BackHandler.bind(this);
		BackAndroid.addEventListener('hardwareBackPress', this.back);
	}
	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress', this.back);
	}
	render() {
		return (
			<ScrollView style={styles.fillContainer}>
				<Toolbar title={this.props.title} navigator={this.props.navigator} />
				{this.props.children}
			</ScrollView>
		);
	}
}


module.exports = Layout;