import React from 'react';
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody
} from '@material-ui/core';

interface IProps {
  simulations: number[][];
}

const SimulationTable: React.FC<IProps> = ({ simulations }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>De</TableCell>
            <TableCell>Para</TableCell>
            <TableCell>Minutos</TableCell>
            <TableCell>Sem Fale Mais</TableCell>
            <TableCell>Fale Mais 30</TableCell>
            <TableCell>Fale Mais 60</TableCell>
            <TableCell>Fale Mais 120</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {simulations.map((simulation, i) => (
            <TableRow key={i}>
              {simulation.map((value, i) => (
                <TableCell key={i}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimulationTable;
