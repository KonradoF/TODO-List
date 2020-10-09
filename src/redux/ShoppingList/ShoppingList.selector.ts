import {listProps, StateProps} from '../types';

export const getCurrentLists = (state: StateProps): Array<listProps> => {
  return state.shoppingList.currentLists.list;
};
export const getCurrentListsLoading = (state: StateProps): boolean => {
  return state.shoppingList.currentLists.loading;
};
export const getArchivedLists = (state: StateProps): Array<listProps> => {
  return state.shoppingList.archivedLists.list;
};
export const getArchivedListsLoading = (state: StateProps): boolean => {
  return state.shoppingList.archivedLists.loading;
};
export const getCurrentListByID = (
  state: StateProps,
  id: number,
): listProps => {
  const tempArray = state.shoppingList.currentLists.list;
  return tempArray.find((object) => object.id === id);
};
export const getArchivedListByID = (
  state: StateProps,
  id: number,
): listProps => {
  const tempArray = state.shoppingList.archivedLists.list;
  return tempArray.find((object) => object.id === id);
};
export const getListByID = (
  state: StateProps,
  id: number,
  type: string,
): listProps => {
  if (type === 'current') {
    return getCurrentListByID(state, id);
  } else {
    return getArchivedListByID(state, id);
  }
};
export const getListLoader = (state: StateProps, type: string): boolean => {
  if (type === 'current') {
    return getCurrentListsLoading(state);
  } else {
    return getArchivedListsLoading(state);
  }
};
