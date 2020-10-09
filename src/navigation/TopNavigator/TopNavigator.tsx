import React, {ReactElement} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screens from 'src/navigation/Screens';
import EStyleSheet from 'react-native-extended-stylesheet';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles} from './styles';
import Colors from 'src/config/Theme/Colors';
import {CurrentLists} from 'src/screens/CurrentLists/CurrentLists';
import {ArchivedLists} from 'src/screens/ArchivedLists/ArchivedLists';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const _tabBarComponent = ({state, descriptors, navigation}): ReactElement => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabContainer}>
              <Text
                h4
                h4Style={styles.text}
                style={EStyleSheet.flatten({
                  color: isFocused ? Colors.primary : Colors.gray,
                })}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export const TopNavigator = (): ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.CURRENT_LISTS}
      backBehavior={'order'}
      tabBar={(props) => <_tabBarComponent {...props} />}
      tabBarOptions={{
        style: {
          backgroundColor: 'white',
        },
        activeTintColor: EStyleSheet.value('$primary'),
      }}>
      <Tab.Screen
        name={Screens.CURRENT_LISTS}
        options={{tabBarLabel: 'Current Lists'}}
        component={CurrentLists}
      />
      <Tab.Screen
        name={Screens.ARCHIVED_LISTS}
        options={{tabBarLabel: 'Archived Lists'}}
        component={ArchivedLists}
      />
    </Tab.Navigator>
  );
};
