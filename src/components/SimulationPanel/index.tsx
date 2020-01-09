import React from 'react';
import { Input, Button } from '@material-ui/core';

interface IProps {
  onInputChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onSimulate: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  formState: {
    from: number;
    to: number;
    minutes: number;
  };
}

const SimulationPanel: React.FC<IProps> = ({
  onInputChange,
  onSimulate,
  formState: { from, to, minutes }
}) => {
  return (
    <>
      <Input
        type="number"
        name="from"
        placeholder="From"
        required
        onChange={onInputChange}
        value={from ? from : null}
      />
      <Input
        type="number"
        name="to"
        placeholder="To"
        required
        onChange={onInputChange}
        value={to ? to : null}
      />
      <Input
        type="number"
        name="minutes"
        placeholder="Minutes"
        required
        onChange={onInputChange}
        value={minutes ? minutes : null}
      />
      <Button color="primary" variant="contained" onClick={onSimulate}>
        Simulate
      </Button>
    </>
  );
};

export default SimulationPanel;
