import React, {ReactElement} from 'react';
import {ActivityIndicator} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface Props {
  secondary?: boolean;
}
export const Loader = ({secondary}: Props): ReactElement => {
  return (
    <ActivityIndicator
      color={
        secondary
          ? EStyleSheet.value('$loaderSecondaryColor')
          : EStyleSheet.value('$loaderDefaultColor')
      }
      size="large"
    />
  );
};
