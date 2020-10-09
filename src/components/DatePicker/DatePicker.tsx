import React, {ReactElement} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';

interface Props {
  visible: boolean;
  onClose: (date: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
  onConfirm: (date: Date) => void;
  date?: Date;
}

export const DatePicker = ({
  visible = false,
  onClose,
  mode = 'date',
  onConfirm,
  date,
  ...otherProps
}: Props): ReactElement => {
  return (
    <DateTimePicker
      onConfirm={onConfirm}
      onCancel={onClose}
      mode={mode}
      isVisible={visible}
      date={date}
      {...otherProps}
    />
  );
};
