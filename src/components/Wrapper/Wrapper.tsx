import React, {ReactElement, ReactNode} from 'react';
import {View, ScrollView, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

type Props = {
  children?: ReactNode;
  noScroll?: boolean;
  spacingTop?: boolean;
  style?: ViewStyle;
  noSpacing?: boolean;
  keyboardShouldPersistTaps?: 'handled' | 'always';
  bounces?: boolean;
  bgColor?: boolean;
};
export const Wrapper = ({
  noSpacing,
  children,
  noScroll = false,
  spacingTop,
  style,
  keyboardShouldPersistTaps,
  bounces = false,
  bgColor = false,
}: Props): ReactElement => {
  if (noScroll) {
    return (
      <View
        style={EStyleSheet.flatten([
          styles.wrapper,
          noSpacing && styles.noSpacing,
          spacingTop && styles.spacingTop,
          style,
        ])}>
        {children}
      </View>
    );
  } else {
    return (
      <ScrollView
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        bounces={bounces}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={EStyleSheet.flatten([
          styles.scrollWrapper,
          spacingTop && styles.spacingTop,
          style,
        ])}
        style={EStyleSheet.flatten([
          styles.wrapper,
          noSpacing && styles.noSpacing,
          bgColor && {backgroundColor: 'transparent'},
        ])}>
        {children}
      </ScrollView>
    );
  }
};
