import React from 'react';
import { Input } from '@material-ui/core';

interface IProps {
  onInputChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const SimulationPanel: React.FC<IProps> = ({ onInputChange }) => {
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
    </>
  );
};

export default SimulationPanel;
