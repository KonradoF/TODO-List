import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {Theme} from './src/config/Theme/styleVariables';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build(Theme);
Enzyme.configure({adapter: new Adapter()});
