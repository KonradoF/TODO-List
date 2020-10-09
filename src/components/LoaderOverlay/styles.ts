import EStyleSheet from 'react-native-extended-stylesheet';
import {screen} from '../../helpers/Dimension';

export const styles = EStyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    zIndex: 2,
  },
});
