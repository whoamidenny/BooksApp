import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

import authReducer from './auth';
import catalogReducer from './catalog';
import errorReducer from './error';
import filtersReducer from './filters';
import themeReducer from './themes';

const rootReducer = combineReducers({
  auth: authReducer,
  catalog: catalogReducer,
  error: errorReducer,
  theme: themeReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: 'root',
  whitelist: ['auth', 'filter'],
  blacklist: ['catalog', 'error', 'theme'],
  storage: AsyncStorage,
};

export default persistReducer(persistConfig, rootReducer);
