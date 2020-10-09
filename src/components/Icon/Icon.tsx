import React from 'react';
import {Icon as ICon} from 'react-native-elements';
import normalize from 'react-native-normalize';
import {styles} from './styles';
import {GestureResponderEvent, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ReactElement} from 'react';
import Colors from 'src/config/Theme/Colors';

export type IconSizes = 'small' | 'medium' | 'large' | 'huge';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  type?: string;
  name: string;
  color?: string;
  size?: IconSizes;
  style?: ViewStyle;
}

export const Icon = ({
  onPress,
  style,
  name,
  color = Colors.black,
  size = 'medium',
  type = 'font-awesome',
  ...otherProps
}: Props): ReactElement => {
  let iconSize;

  switch (size) {
    case 'small': {
      iconSize = normalize(20);
      break;
    }
    case 'medium': {
      iconSize = normalize(25);
      break;
    }
    case 'large': {
      iconSize = normalize(30);
      break;
    }
    case 'huge': {
      iconSize = normalize(60);
      break;
    }
    default: {
      iconSize = normalize(15);
      break;
    }
  }

  return (
    <ICon
      onPress={onPress}
      name={name}
      color={color}
      size={iconSize}
      type={type}
      style={EStyleSheet.flatten([styles.icon, style])}
      {...otherProps}
    />
  );
};
