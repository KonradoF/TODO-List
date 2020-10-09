import moment from 'moment';

export const dateFormatToListItem = (hour: string): string => {
  return moment(hour).format('DD/MM/YYYY');
};
