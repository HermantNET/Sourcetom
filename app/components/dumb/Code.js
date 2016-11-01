import React, {
  Component
} from 'react';
import {
  View,
  Text,
  ToolbarAndroid
} from 'react-native';
import styles, {
  pallete
} from '../../styles.js';
import Toolbar from './Toolbar.js';
import LogosAndInfo from './LogosAndInfo.js';

class Code extends Component {
  render() {
    return (
      <LogosAndInfo
        title="Tom's Code" 
        subtitle="Places where Tom puts his code:" 
        backgroundImage={require('./imgs/computerFade6.jpg')}
        logos={[
          require('./imgs/github.png'),
          require('./imgs/codepen.png'), 
          require('./imgs/codewars.png')
        ]}>
        <Text style={styles.textDefault}>
            <Text style={{lineHeight: 0}}>{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Github: </Text>https://github.com/HermantNET{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Codepen: </Text>http://codepen.io/hermantnet/{"\n"}</Text>
            <Text><Text style={styles.textStrong}>Codewars: </Text>https://www.codewars.com/users/HermantNET{"\n"}</Text>
        </Text>
      </LogosAndInfo>
    );
  }
}

export default Code;