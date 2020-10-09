import React, {ReactElement, ReactNode} from 'react';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

interface Props {
  children?: ReactNode;
  style?: ViewStyle;
}

export const Form = ({children, style}: Props): ReactElement => {
  return (
    <KeyboardAvoidingView
      contentContainerStyle={styles.container}
      style={EStyleSheet.flatten([styles.spacing, style])}
      behavior={Platform.select({ios: 'padding', android: null})}
      enabled
      keyboardVerticalOffset={Platform.select({ios: 0, android: null})}>
      {children}
    </KeyboardAvoidingView>
  );
};
