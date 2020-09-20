import {combineReducers} from 'redux';

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

export default rootReducer;
