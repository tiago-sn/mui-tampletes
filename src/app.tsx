import React, { useReducer } from 'react';
import simulate from './lib';
import SimulationPanel from './components/SimulationPanel';
import { ReactChangeEvent, State, ReactMouseEvent, DDD } from './app.types';
import reducer from './reducer';

const initialState: State = {
  from: 0,
  to: 0,
  minutes: 0,
  simulations: []
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectDDD = (e: ReactChangeEvent) => {
    const value = parseInt(e.target.value);
    const { name } = e.target;
    dispatch({ type: name as 'to' | 'from' | 'minutes', value });
  };

  const onSimulate = (e: ReactMouseEvent) => {
    const { from, to, minutes } = state;
    const simulations = simulate(from as DDD, to as DDD, minutes as DDD);
    dispatch({ type: 'addSimulation', value: simulations });
    dispatch({ type: 'cleanForm' });
  };

  const { from, to, minutes } = state;
  const formState = { from, to, minutes };
  return (
    <SimulationPanel
      onInputChange={selectDDD}
      onSimulate={onSimulate}
      formState={formState}
    />
  );
};

export default App;
