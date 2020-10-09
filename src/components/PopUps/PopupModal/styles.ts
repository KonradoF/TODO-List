import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from 'react-native-normalize';

export const styles = EStyleSheet.create({
  firstContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  safeArea: {flex: 0.5, justifyContent: 'flex-end'},
  secondContainer: {
    backgroundColor: '$white',
    paddingHorizontal: '5%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: '$popupModalPaddingBottom',
  },
  itemsContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  btnContainer: {
    width: '100%',
    height: normalize(60),
    justifyContent: 'center',
  },
  btn: {
    paddingTop: normalize(10),
    paddingBottom: normalize(10),
    backgroundColor: '$primary',
  },
  closeBtn: {
    paddingTop: normalize(10),
    paddingBottom: normalize(10),
    backgroundColor: '$gray',
  },
});
