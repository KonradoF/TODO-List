import React, {ReactElement, useEffect} from 'react';
import {Container} from 'src/components/Container/Container';
import {Wrapper} from 'src/components/Wrapper/Wrapper';
import {ListItem} from 'react-native-elements';
import {Icon} from 'src/components/Icon/Icon';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';
import {
  getArchivedLists,
  getArchivedListsLoading,
} from 'src/redux/ShoppingList/ShoppingList.selector';
import {handleGetArchivedLists} from 'src/redux/ShoppingList/ShoppingList.action';
import {dateFormatToListItem} from 'src/helpers/Moment';
import moment from 'moment';
import {navigate} from 'src/navigation/Navigation';
import Screens from 'src/navigation/Screens';
import {EmptyList} from 'src/components/EmptyList/EmptyList';
import {LoaderOverlay} from 'src/components/LoaderOverlay/LoaderOverlay';

export const ArchivedLists = (): ReactElement => {
  const dispatch = useDispatch();
  const list = useSelector(getArchivedLists);
  const loader = useSelector(getArchivedListsLoading);

  useEffect(() => {
    dispatch(handleGetArchivedLists());
  }, [dispatch]);

  const _navigate = (object) => {
    navigate(Screens.LIST_DETAILS, {
      itemId: object.id,
      type: 'archived',
    });
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
                onPress={() => _navigate(object)}
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
      <LoaderOverlay visible={loader} />
    </Container>
  );
};
