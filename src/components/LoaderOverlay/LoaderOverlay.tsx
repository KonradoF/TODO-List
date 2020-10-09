import {Loader} from '../Loader/Loader';
import React, {ReactElement, useLayoutEffect, useRef} from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import {styles} from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

interface Props {
  visible: boolean;
  transparent?: boolean;
}

export const LoaderOverlay = ({
  visible,
  transparent = false,
}: Props): ReactElement => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };
  useLayoutEffect(() => {
    if (!visible) {
      fadeOut();
    }
    if (visible) {
      fadeIn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  return (
    <Animated.View
      pointerEvents={visible ? 'auto' : 'none'}
      style={EStyleSheet.flatten([
        styles.container,
        transparent && {backgroundColor: 'rgba(0,0,0,0)'},
        {
          opacity: fadeAnim,
        },
      ])}>
      <Loader />
    </Animated.View>
  );
};
