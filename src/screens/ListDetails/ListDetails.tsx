import React, {ReactElement, useState} from 'react';
import {Container} from 'src/components/Container/Container';
import {Header, Input, ListItem, Text} from 'react-native-elements';
import {styles} from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Icon} from 'src/components/Icon/Icon';
import {navigate} from 'src/navigation/Navigation';
import Screens from 'src/navigation/Screens';
import {Alert, FlatList, Platform, View} from 'react-native';
import {EmptyList} from 'src/components/EmptyList/EmptyList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {
  getListByID,
  getListLoader,
} from 'src/redux/ShoppingList/ShoppingList.selector';
import {
  handleAddElement,
  handleRemoveElement,
} from 'src/redux/ShoppingList/ShoppingList.action';
import {sortByNameASC, sortByNameDESC} from 'src/helpers/Sort';
import {PopupModal} from 'src/components/PopUps/PopupModal/PopupModal';
import {LoaderOverlay} from 'src/components/LoaderOverlay/LoaderOverlay';
import {StateProps} from 'src/redux/types';

interface Props {
  route: any;
}

export const ListDetails = ({route}: Props): ReactElement => {
  const {itemId} = route.params;
  const {type} = route.params;
  const isCurrent = type === 'current';
  const dispatch = useDispatch();
  const data = useSelector((state: StateProps) =>
    getListByID(state, itemId, type),
  );
  const loader = useSelector((state: StateProps) => getListLoader(state, type));
  const [sortByASC, setSortByASC] = useState(false);
  const [input, setInput] = useState('');
  const [addModal, setAddModal] = useState(false);

  const _sort = () => {
    if (sortByASC) {
      setSortByASC(false);
      return sortByNameASC(data.items);
    } else {
      setSortByASC(true);
      return sortByNameDESC(data.items);
    }
  };

  const _showHideModal = () => {
    setAddModal(!addModal);
  };

  const _confirmTitle = () => {
    _showHideModal();
    dispatch(handleAddElement(itemId, input));
    setInput('');
  };

  const _renderModal = () => {
    return (
      <Input
        placeholder={'Name'}
        value={input}
        autoCapitalize={'none'}
        maxLength={30}
        onChangeText={(value) => setInput(value)}
        containerStyle={styles.input}
      />
    );
  };

  const _renderItem = ({item}) => {
    return (
      <ListItem
        containerStyle={styles.listItemContainer}
        key={item.id}
        title={item.name}
        bottomDivider
        chevron={
          isCurrent && (
            <Icon
              name={'trash'}
              onPress={() =>
                Alert.alert('Are you sure', '', [
                  {
                    text: 'Remove',
                    onPress: () =>
                      dispatch(handleRemoveElement(itemId, item.id)),
                  },
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                ])
              }
              size={'small'}
              color={EStyleSheet.value('gray')}
            />
          )
        }
      />
    );
  };

  const _rightHeaderComponent = () => {
    return (
      <View style={styles.rightHeaderContainer}>
        <View style={isCurrent ? styles.sortIcon : null}>
          <Icon
            onPress={() => _sort()}
            name={'sort'}
            size={'medium'}
            color={EStyleSheet.value('$white')}
          />
        </View>
        {isCurrent && (
          <Icon
            onPress={() => _showHideModal()}
            name={'plus-circle'}
            size={'medium'}
            color={EStyleSheet.value('$white')}
          />
        )}
      </View>
    );
  };

  const _headerSafeArea = (children) => {
    if (Platform.OS === 'android') {
      return <SafeAreaView>{children}</SafeAreaView>;
    } else {
      return children;
    }
  };

  const _headerComponent = () => {
    return (
      <Header
        containerStyle={styles.headerContainer}
        placement={'center'}
        centerComponent={
          <Text h4 style={styles.headerText}>
            Details
          </Text>
        }
        backgroundColor={EStyleSheet.value('$primary')}
        leftComponent={
          <Icon
            onPress={() => navigate(Screens.TAB_NAV)}
            name={'chevron-left'}
            size={'medium'}
            color={EStyleSheet.value('$white')}
          />
        }
        rightComponent={_rightHeaderComponent()}
      />
    );
  };

  return (
    <Container style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data.items}
        ListHeaderComponent={_headerSafeArea(_headerComponent())}
        renderItem={_renderItem}
        ListEmptyComponent={<EmptyList title={'No Details'} />}
      />
      <PopupModal
        buttonDisabled={input.length === 0}
        visible={addModal}
        onClose={_showHideModal}
        buttonTitle={'Add'}
        button={_confirmTitle}>
        {_renderModal()}
      </PopupModal>
      <LoaderOverlay visible={loader} />
    </Container>
  );
};
