import {INITIAL_STATE_PROPS} from './ShoppingList/ShoppingList.reducer';

export interface listProps {
  id: number;
  date: Date;
  name: string;
  isArchived: boolean;
  items: Array<listItemProps>;
}

export interface listItemProps {
  id: string;
  name: string;
}

export interface StateProps {
  shoppingList: INITIAL_STATE_PROPS;
}
