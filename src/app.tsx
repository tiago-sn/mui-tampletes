import React, { ChangeEvent, useReducer } from 'react';
import SimulationPanel from './containers/SimulationPanel';

interface State {
  from: number;
  to: number;
}

type Action = { type: 'from'; value: number } | { type: 'to'; value: number };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'from':
      return { ...state, from: action.value };
    case 'to':
      return { ...state, to: action.value };
    default:
      return state;
  }
};

const initialState: State = {
  from: 11,
  to: 16
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectDDD = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value);
    const { name } = e.target;
    dispatch({ type: name as 'to' | 'from', value });
  };

  return <SimulationPanel onSelectDDD={selectDDD} />;
};

export default App;
