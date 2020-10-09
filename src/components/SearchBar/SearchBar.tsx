import React, {ReactElement} from 'react';
import {SearchBar as SB} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import {ViewStyle} from 'react-native';

interface Props {
  value: string;
  placeholder?: string;
  onChangeText: (input: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
}

export const SearchBar = ({
  value,
  placeholder,
  onChangeText,
  containerStyle,
  inputStyle,
  ...otherProps
}: Props): ReactElement => {
  return (
    <SB
      inputContainerStyle={EStyleSheet.flatten(styles.inputContainer)}
      containerStyle={EStyleSheet.flatten([styles.container, containerStyle])}
      inputStyle={EStyleSheet.flatten([styles.input, inputStyle])}
      leftIconContainerStyle={styles.leftIcon}
      value={value}
      round
      placeholder={placeholder}
      onChangeText={onChangeText}
      numberOfLines={1}
      maxLength={40}
      {...otherProps}
    />
  );
};
