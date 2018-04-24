// @flow
import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer';
import walletReducer from './walletReducer';
import assetsReducer from './assetsReducer';

export default combineReducers({
  navigation: navigationReducer,
  wallet: walletReducer,
  assets: assetsReducer,
});