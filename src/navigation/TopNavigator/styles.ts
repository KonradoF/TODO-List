import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from 'react-native-normalize';

export const styles = EStyleSheet.create({
  safeAreaContainer: {
    paddingBottom: 0,
  },
  container: {
    flexDirection: 'row',
    height: '$topBarHeight',
    borderColor: '$defaultBorderColor',
    borderBottomWidth: 1,
    marginTop: normalize(10),
    paddingTop: 0,
    paddingBottom: 0,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: normalize(25),
  },
});
