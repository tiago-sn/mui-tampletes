import React from 'react';
import { Input, Button, Container } from '@material-ui/core';

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
}) => (
  <Container maxWidth="xs">
    <Input
      type="number"
      name="from"
      placeholder="De"
      required
      onChange={onInputChange}
      value={from ? from : ''}
      fullWidth
    />
    <Input
      type="number"
      name="to"
      placeholder="Para"
      required
      onChange={onInputChange}
      value={to ? to : ''}
      fullWidth
    />
    <Input
      type="number"
      name="minutes"
      placeholder="Minutos"
      required
      onChange={onInputChange}
      value={minutes ? minutes : ''}
      fullWidth
    />
    <br />
    <br />
    <Button color="primary" variant="contained" onClick={onSimulate}>
      Simular
    </Button>
  </Container>
);

export default SimulationPanel;
