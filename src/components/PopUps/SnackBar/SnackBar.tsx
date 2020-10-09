import {MessageType, showMessage} from 'react-native-flash-message';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const SnackBar = (
  message: string,
  description?: string,
  type: MessageType = 'default',
  duration = 1850,
) => {
  return showMessage({
    message: message,
    description: description,
    type: type,
    position: 'top',
    duration: duration,
  });
};
