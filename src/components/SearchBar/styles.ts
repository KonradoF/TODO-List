import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from 'react-native-normalize';

export const styles = EStyleSheet.create({
  inputContainer: {
    backgroundColor: '$white',
    borderBottomWidth: 1,
    borderWidth: 1,
    height: normalize(25),
  },
  container: {
    backgroundColor: '$white',
    borderTopColor: '$white',
    borderBottomColor: '$white',
  },
  input: {
    backgroundColor: '$white',
    fontSize: normalize(15),
    marginLeft: normalize(5),
  },
  leftIcon: {backgroundColor: '$white'},
});
