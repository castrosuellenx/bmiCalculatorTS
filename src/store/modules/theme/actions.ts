import {TOGGLE_THEME} from './types';

export const toggleTheme = (payload: boolean) => {
  return {
    type: TOGGLE_THEME,
    payload,
  };
};
