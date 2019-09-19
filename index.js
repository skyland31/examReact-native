/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './main/Home';
import App from './AppMain';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox = true;