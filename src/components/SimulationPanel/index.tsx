import React from 'react';
import { Input, Button } from '@material-ui/core';

interface IProps {
  onInputChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;

  onSimulate: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SimulationPanel: React.FC<IProps> = ({ onInputChange, onSimulate }) => {
  return (
    <>
      <Input
        type="number"
        name="from"
        placeholder="From"
        required
        onChange={onInputChange}
      />
      <Input
        type="number"
        name="to"
        placeholder="To"
        required
        onChange={onInputChange}
      />
      <Input
        type="number"
        name="minutes"
        placeholder="Minutes"
        required
        onChange={onInputChange}
      />
      <Button color="primary" variant="contained" onClick={onSimulate}>
        Simulate
      </Button>
    </>
  );
};

export default SimulationPanel;
