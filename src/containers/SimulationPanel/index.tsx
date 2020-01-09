import React from 'react';
import { Input } from '@material-ui/core';

interface IProps {
  onSelectDDD: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const SimulationPanel: React.FC<IProps> = ({ onSelectDDD }) => {
  return (
    <>
      <Input
        type="number"
        name="from"
        placeholder="From"
        required
        onChange={onSelectDDD}
      />
      <Input
        type="number"
        name="to"
        placeholder="To"
        required
        onChange={onSelectDDD}
      />
    </>
  );
};

export default SimulationPanel;
