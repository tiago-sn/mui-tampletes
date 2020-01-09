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
      const simulations = state.simulations;
      simulations.push(action.value);
      return { ...state, simulations };
    default:
      return state;
  }
};
