import React, {ReactElement, useEffect, useState} from 'react';
import {Container} from 'src/components/Container/Container';
import {Wrapper} from 'src/components/Wrapper/Wrapper';
import {Input, ListItem} from 'react-native-elements';
import {Alert, View} from 'react-native';
import {Icon} from 'src/components/Icon/Icon';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import {navigate} from 'src/navigation/Navigation';
import Screens from 'src/navigation/Screens';
import {useDispatch, useSelector} from 'react-redux';
import {dateFormatToListItem} from 'src/helpers/Moment';
import moment from 'moment';
import {
  handleAddCurrentList,
  handleArchiveList,
  handleDeleteList,
  handleGetCurrentLists,
} from 'src/redux/ShoppingList/ShoppingList.action';
import {
  getCurrentLists,
  getCurrentListsLoading,
} from 'src/redux/ShoppingList/ShoppingList.selector';
import {PopupModal} from 'src/components/PopUps/PopupModal/PopupModal';
import {DatePicker} from 'src/components/DatePicker/DatePicker';
import {EmptyList} from 'src/components/EmptyList/EmptyList';
import {sortByDateASC, sortByDateDESC} from 'src/helpers/Sort';
import {LoaderOverlay} from 'src/components/LoaderOverlay/LoaderOverlay';

export const CurrentLists = (): ReactElement => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [addModal, setAddModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [sortByASC, setSortByASC] = useState(false);
  const list = useSelector(getCurrentLists);
  const loader = useSelector(getCurrentListsLoading);

  useEffect(() => {
    dispatch(handleGetCurrentLists());
  }, [dispatch]);

  const _sort = () => {
    if (sortByASC) {
      setSortByASC(false);
      return sortByDateASC(list);
    } else {
      setSortByASC(true);
      return sortByDateDESC(list);
    }
  };

  const _addList = (date) => {
    setInput('');
    dispatch(handleAddCurrentList(input, date));
    _showHideDate();
  };

  const _showHideModal = () => {
    setAddModal(!addModal);
  };

  const _showHideDate = () => {
    setDateModal(!dateModal);
  };

  const _confirmListTitle = () => {
    _showHideModal();
    _showHideDate();
  };

  const _renderModal = () => {
    return (
      <Input
        placeholder={'List Title'}
        value={input}
        autoCapitalize={'none'}
        maxLength={30}
        onChangeText={(value) => setInput(value)}
        containerStyle={styles.input}
      />
    );
  };

  const _longPress = (id) => {
    Alert.alert('Choose an option', '', [
      {
        text: 'Archive',
        onPress: () => dispatch(handleArchiveList(id)),
      },
      {text: 'Delete List', onPress: () => dispatch(handleDeleteList(id))},
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  return (
    <Container>
      <Wrapper noSpacing spacingTop>
        {list ? (
          list.map((object, i) => {
            return (
              <ListItem
                key={i}
                title={object.name}
                subtitle={dateFormatToListItem(moment(object.date).format())}
                bottomDivider
                onPress={() =>
                  navigate(Screens.LIST_DETAILS, {
                    itemId: object.id,
                    type: 'current',
                  })
                }
                onLongPress={() => _longPress(object.id)}
                chevron={
                  <Icon
                    name={'chevron-right'}
                    size={'small'}
                    color={EStyleSheet.value('gray')}
                  />
                }
              />
            );
          })
        ) : (
          <EmptyList title={'No Lists'} />
        )}
      </Wrapper>
      <View style={styles.addContainer}>
        <Icon
          onPress={() => _showHideModal()}
          name={'plus-circle'}
          size={'huge'}
          color={EStyleSheet.value('$primary')}
        />
      </View>
      <View style={styles.sortContainer}>
        <Icon
          onPress={() => _sort()}
          name={'sort'}
          size={'huge'}
          color={EStyleSheet.value('$primary')}
        />
      </View>
      <PopupModal
        buttonDisabled={input.length === 0}
        visible={addModal}
        onClose={_showHideModal}
        buttonTitle={'Create'}
        button={_confirmListTitle}>
        {_renderModal()}
      </PopupModal>
      <DatePicker
        visible={dateModal}
        onClose={_showHideDate}
        onConfirm={_addList}
      />
      <LoaderOverlay visible={loader} />
    </Container>
  );
};
