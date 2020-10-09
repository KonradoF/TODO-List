import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from 'react-native-normalize';

export const styles = EStyleSheet.create({
  addContainer: {
    marginBottom: '$marginHorizontal',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  sortContainer: {
    marginBottom: '$marginHorizontal',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  input: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: normalize(20),
  },
});
