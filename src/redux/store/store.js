import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ShoppingListReducer from 'src/redux/ShoppingList/ShoppingList.reducer';

const middleware = [thunk];

const reducers = combineReducers({
  shoppingList: ShoppingListReducer,
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);
