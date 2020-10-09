import {listItemProps, listProps} from 'src/redux/types';

export const sortByDateASC = (array: Array<listProps>): Array<listProps> => {
  const compare = (a, b) => {
    return new Date(a.date) - new Date(b.date);
  };
  return array.sort(compare);
};

export const sortByDateDESC = (array: Array<listProps>): Array<listProps> => {
  const compare = (a, b) => {
    return new Date(b.date) - new Date(a.date);
  };
  return array.sort(compare);
};

export const sortByNameASC = (
  array: Array<listItemProps>,
): Array<listItemProps> => {
  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  return array.sort(compare);
};

export const sortByNameDESC = (
  array: Array<listItemProps>,
): Array<listItemProps> => {
  const compare = (a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  };
  return array.sort(compare);
};
