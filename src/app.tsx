import React, { useReducer } from 'react';
import { Container, Grid } from '@material-ui/core';
import simulate from './lib';
import Form from './components/Form';
import Table from './components/Table';
import Header from './components/Header';
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
    const value = [from, to, minutes, ...simulations];
    dispatch({ type: 'addSimulation', value });
    dispatch({ type: 'cleanForm' });
  };

  const { from, to, minutes, simulations } = state;
  const formState = { from, to, minutes };
  return (
    <Container maxWidth="md">
      <Grid container>
        <Header />
        <Form
          onInputChange={selectDDD}
          onSimulate={onSimulate}
          formState={formState}
        />
        <Table simulations={simulations} />
      </Grid>
    </Container>
  );
};

export default App;
