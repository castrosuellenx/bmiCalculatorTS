import {TOGGLE_THEME} from '../types';

const setTheme = (payload: boolean) => ({
  type: TOGGLE_THEME,
  payload,
});

export default {setTheme};
