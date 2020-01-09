import { Action, State } from '../app.types';

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'from':
      return { ...state, from: action.value };
    case 'to':
      return { ...state, to: action.value };
    case 'minutes':
      return { ...state, minutes: action.value };
    case 'addSimulation':
      const { simulations } = state;
      simulations.push(action.value);
      return { ...state, simulations };
    case 'cleanForm':
      const { from, to, minutes } = state;
      return { ...state, from: 0, to: 0, minutes: 0 };
    default:
      return state;
  }
};
