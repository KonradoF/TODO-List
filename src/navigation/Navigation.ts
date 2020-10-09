import {CommonActions} from '@react-navigation/native';
import {ScreensType} from './Screens';

let navigator: any;

export const setTopLevelNavigator = (navigatorRef: ScreensType): void => {
  navigator = navigatorRef;
};

export const navigate = (name: string, params = {}): void => {
  navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
};
