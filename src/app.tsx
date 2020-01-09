import React, { useReducer } from 'react';
import SimulationPanel from './containers/SimulationPanel';
import { ReactChangeEvent, State, Action } from './app.types';
import reducer from './reducer';

const initialState: State = {
  from: 11,
  to: 16
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectDDD = (e: ReactChangeEvent) => {
    const value = parseInt(e.target.value);
    const { name } = e.target;
    dispatch({ type: name as 'to' | 'from', value });
  };

  return <SimulationPanel onSelectDDD={selectDDD} />;
};

export default App;
