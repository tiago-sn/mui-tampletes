import { Action, State } from '../app.types';

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'from':
      return { ...state, from: action.value };
    case 'to':
      return { ...state, to: action.value };
    default:
      return state;
  }
};
