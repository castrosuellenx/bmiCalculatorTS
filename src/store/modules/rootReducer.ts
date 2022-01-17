import {combineReducers} from 'redux';
import theme from './theme/reducer';

const rootReducer = combineReducers({
  theme,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
