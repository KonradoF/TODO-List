import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Text} from 'react-native-elements';

interface Props {
  title: string;
}

export const EmptyList = ({title}: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text h4 style={styles.text}>
        {title}
      </Text>
    </View>
  );
};
