import {combineReducers} from 'redux';
import theme from './theme';

const appReducer = combineReducers({
  theme,
});

export default appReducer;

export type State = ReturnType;
