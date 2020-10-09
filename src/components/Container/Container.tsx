import React, {ReactElement, ReactNode} from 'react';
import {View, ViewStyle, SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import {Form} from 'src/components/Form/Form';

interface Props {
  shouldSafeAreaView?: boolean;
  keyboardAvoidingView?: boolean;
  children?: ReactNode;
  style?: ViewStyle;
  transparent?: boolean;
}

export const Container = ({
  shouldSafeAreaView = true,
  keyboardAvoidingView,
  children,
  style,
  transparent = false,
}: Props): ReactElement => {
  if (keyboardAvoidingView) {
    return (
      <Form>
        {shouldSafeAreaView ? (
          <SafeAreaView
            style={EStyleSheet.flatten([
              styles.wrapper,
              transparent && {backgroundColor: 'transparent'},
              style,
            ])}>
            {children}
          </SafeAreaView>
        ) : (
          <View
            style={EStyleSheet.flatten([
              styles.wrapper,
              transparent && {backgroundColor: 'transparent'},
              style,
            ])}>
            {children}
          </View>
        )}
      </Form>
    );
  }
  return shouldSafeAreaView ? (
    <SafeAreaView
      style={EStyleSheet.flatten([
        styles.wrapper,
        transparent && {backgroundColor: 'transparent'},
        style,
      ])}>
      {children}
    </SafeAreaView>
  ) : (
    <View
      style={EStyleSheet.flatten([
        styles.wrapper,
        transparent && {backgroundColor: 'transparent'},
        style,
      ])}>
      {children}
    </View>
  );
};
