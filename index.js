/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FadeDemo from './fade';
import ScaleDemo from './scale';
import SpringDemo from './spring';

AppRegistry.registerComponent(appName, () => SpringDemo);
