import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactElement} from 'react';
import Screens from '../Screens';
import {TopNavigator} from 'src/navigation/TopNavigator/TopNavigator';
import {ListDetails} from 'src/screens/ListDetails/ListDetails';

const Stack = createStackNavigator();

export const StackNavigator = (): ReactElement => {
  return (
    <Stack.Navigator initialRouteName={Screens.TAB_NAV} headerMode={'none'}>
      <Stack.Screen name={Screens.TAB_NAV} component={TopNavigator} />
      <Stack.Screen name={Screens.LIST_DETAILS} component={ListDetails} />
    </Stack.Navigator>
  );
};
