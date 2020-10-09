import {createAsyncTypes} from 'src/config/AsyncTypes/createAsyncTypes';
import {
  getArchivedLists,
  getCurrentListByID,
  getCurrentLists,
} from './ShoppingList.selector';
import {sortByDateDESC, sortByNameASC} from 'src/helpers/Sort';
import {SnackBar} from 'src/components/PopUps/SnackBar/SnackBar';
import AsyncStorage from '@react-native-community/async-storage';
import {ThunkDispatch} from 'redux-thunk';
import {StateProps} from '../types';

type MyRootState = {unknown};
type MyThunkDispatch = ThunkDispatch<MyRootState, undefined, any>;

export const GET_CURRENT_LISTS = createAsyncTypes('GET_CURRENT_LISTS');
export const handleGetCurrentLists = () => async (
  dispatch: MyThunkDispatch,
): Promise<any> => {
  dispatch({
    type: GET_CURRENT_LISTS.pending,
  });
  try {
    const tempList = await AsyncStorage.getItem('@currentList');
    const list = tempList ? JSON.parse(tempList) : [];
    sortByDateDESC(list);
    list.map((array) => {
      return sortByNameASC(array.items);
    });
    dispatch({
      type: GET_CURRENT_LISTS.resolved,
      payload: list,
    });
  } catch (e) {
    SnackBar('Error', 'Something went wrong', 'danger');
    dispatch({
      type: GET_CURRENT_LISTS.rejected,
      payload: e,
    });
  }
};

export const GET_ARCHIVED_LISTS = createAsyncTypes('GET_ARCHIVED_LISTS');
export const handleGetArchivedLists = () => async (
  dispatch: MyThunkDispatch,
): Promise<any> => {
  dispatch({
    type: GET_ARCHIVED_LISTS.pending,
  });
  try {
    const tempList = await AsyncStorage.getItem('@archivedList');
    const list = tempList ? JSON.parse(tempList) : [];
    sortByDateDESC(list);
    list.map((array) => {
      return sortByNameASC(array.items);
    });
    dispatch({
      type: GET_ARCHIVED_LISTS.resolved,
      payload: list,
    });
  } catch (e) {
    SnackBar('Error', 'Something went wrong', 'danger');
    dispatch({
      type: GET_ARCHIVED_LISTS.rejected,
      payload: e,
    });
  }
};

export const ARCHIVE_LIST = createAsyncTypes('ARCHIVE_LIST');
export const handleArchiveList = (id: number) => async (
  dispatch: MyThunkDispatch,
  getState: () => StateProps,
): Promise<any> => {
  const state = getState();
  dispatch({
    type: ARCHIVE_LIST.pending,
  });
  try {
    let currentLists = [...getCurrentLists(state)];
    const archiveLists = [...getArchivedLists(state)];
    let listToTrade = {
      id: archiveLists.length + 1,
      isArchived: false,
      date: new Date(),
      name: '',
      items: [],
    };
    currentLists = currentLists.filter((list) => {
      if (list.id === id) {
        listToTrade = {...list};
        listToTrade.isArchived = true;
        listToTrade.id = archiveLists.length + 1;
        return null;
      } else {
        return list;
      }
    });
    archiveLists.push(listToTrade);
    sortByDateDESC(archiveLists);
    archiveLists.map((array) => {
      return sortByNameASC(array.items);
    });
    await AsyncStorage.setItem('@currentList', JSON.stringify(currentLists));
    await AsyncStorage.setItem('@archivedList', JSON.stringify(archiveLists));
    dispatch({
      type: ARCHIVE_LIST.resolved,
      currentList: currentLists,
      archiveList: archiveLists,
    });
  } catch (e) {
    SnackBar('Error', 'Something went wrong', 'danger');
    dispatch({
      type: ARCHIVE_LIST.rejected,
      payload: e,
    });
  }
};

export const DELETE_LIST = createAsyncTypes('DELETE_LIST');
export const handleDeleteList = (id: number) => async (
  dispatch: MyThunkDispatch,
  getState: () => StateProps,
): Promise<any> => {
  const state = getState();
  dispatch({
    type: DELETE_LIST.pending,
  });
  try {
    const currentLists = getCurrentLists(state);
    const list = [...currentLists];
    const tempArray = list.filter((object) => object.id !== id);
    await AsyncStorage.setItem('@currentList', JSON.stringify(tempArray));
    dispatch({
      type: DELETE_LIST.resolved,
      payload: tempArray,
    });
  } catch (e) {
    SnackBar('Error', 'Something went wrong', 'danger');
    dispatch({
      type: DELETE_LIST.rejected,
      payload: e,
    });
  }
};

export const ADD_CURRENT_LIST = createAsyncTypes('ADD_CURRENT_LIST');
export const handleAddCurrentList = (title: string, date: Date) => async (
  dispatch: MyThunkDispatch,
  getState: () => StateProps,
): Promise<any> => {
  const state = getState();
  dispatch({
    type: ADD_CURRENT_LIST.pending,
  });
  try {
    const tempArray = state.shoppingList.currentLists.list;
    tempArray.push({
      id: tempArray.length + 1,
      name: title,
      date: date,
      isArchived: false,
      items: [],
    });
    sortByDateDESC(tempArray);
    await AsyncStorage.setItem('@currentList', JSON.stringify(tempArray));
    dispatch({
      type: ADD_CURRENT_LIST.resolved,
      payload: tempArray,
    });
  } catch (e) {
    SnackBar('Error', 'Something went wrong', 'danger');
    dispatch({
      type: ADD_CURRENT_LIST.rejected,
      payload: e,
    });
  }
};

export const ADD_ELEMENT = createAsyncTypes('ADD_ELEMENT');
export const handleAddElement = (id: number, title: string) => async (
  dispatch: MyThunkDispatch,
  getState: () => StateProps,
): Promise<any> => {
  const state = getState();
  dispatch({
    type: ADD_ELEMENT.pending,
  });
  try {
    const details = getCurrentListByID(state, id);
    details.items.push({
      id: (details.items.length + 1).toString(),
      name: title,
    });
    const list = getCurrentLists(state);
    list.filter((value) => {
      if (value.id === id) {
        return details;
      } else {
        return value;
      }
    });
    list.map((array) => {
      return sortByNameASC(array.items);
    });
    await AsyncStorage.setItem('@currentList', JSON.stringify(list));
    dispatch({
      type: ADD_ELEMENT.resolved,
      payload: list,
    });
  } catch (e) {
    SnackBar('Error', 'Something went wrong', 'danger');
    dispatch({
      type: ADD_ELEMENT.rejected,
      payload: e,
    });
  }
};

export const REMOVE_ELEMENT = createAsyncTypes('REMOVE_ELEMENT');
export const handleRemoveElement = (itemId: number, id: string) => async (
  dispatch: MyThunkDispatch,
  getState: () => StateProps,
): Promise<any> => {
  const state = getState();
  dispatch({
    type: REMOVE_ELEMENT.pending,
  });
  try {
    const currentLists = getCurrentLists(state);
    let lists = [...currentLists];
    lists = lists.filter((list) => {
      if (list.id === itemId) {
        list.items = list.items.filter((object) => object.id !== id);
      }
      return list;
    });
    await AsyncStorage.setItem('@currentList', JSON.stringify(lists));
    dispatch({
      type: REMOVE_ELEMENT.resolved,
      payload: lists,
    });
  } catch (e) {
    SnackBar('Error', 'Something went wrong', 'danger');
    dispatch({
      type: REMOVE_ELEMENT.rejected,
      payload: e,
    });
  }
};
