import {TOGGLE_THEME} from '../types';

const initialState = {
  isDark: true,
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDark: action.payload,
      };
    default:
      return state;
  }
};
