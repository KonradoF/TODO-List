import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from "react-redux";
import store from './src/redux/store/store';
import {Theme} from "./src/config/Theme/styleVariables";
import EStyleSheet from "react-native-extended-stylesheet";
import FlashMessage from "react-native-flash-message";
import Colors from "./src/config/Theme/Colors";
import {StackNavigator} from "./src/navigation/StackNavigator/StackNavigator";
import {setTopLevelNavigator} from "./src/navigation/Navigation";

EStyleSheet.build(Theme);

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.white,
    },
};

const App = () => {
  return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer theme={MyTheme} ref={(navigatorRef: any) => {setTopLevelNavigator(navigatorRef);}}>
              <StackNavigator/>
          </NavigationContainer>
          <FlashMessage position="top"/>
        </SafeAreaProvider>
      </Provider>
  );
};

export default App;
