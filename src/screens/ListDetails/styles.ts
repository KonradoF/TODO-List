import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from 'react-native-normalize';

export const styles = EStyleSheet.create({
  container: {marginHorizontal: 0},
  headerContainer: {
    paddingHorizontal: '$marginHorizontal',
    paddingTop: 0,
    height: '$topBarHeight',
  },
  headerText: {color: '$white'},
  flatListContainer: {flex: 1},
  addContainer: {
    marginBottom: '$marginHorizontal',
    marginRight: '$marginHorizontal',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  rightHeaderContainer: {
    flexDirection: 'row',
  },
  sortIcon: {
    marginRight: normalize(25),
  },
  listItemContainer: {
    paddingHorizontal: '$marginHorizontal',
    paddingVertical: normalize(20),
  },
  input: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: normalize(20),
  },
});
