import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  wrapper: {
    paddingHorizontal: '$wrapperPaddingHorizontal',
    backgroundColor: '$white',
    flex: 1,
  },
  scrollWrapper: {flexGrow: 1, paddingBottom: '$wrapperPaddingBottom'},
  noSpacing: {paddingHorizontal: 0},
  spacingTop: {paddingTop: '$wrapperPaddingTop'},
});
