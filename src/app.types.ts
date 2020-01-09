import React, { ChangeEvent } from 'react';

export type ReactChangeEvent = ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;

export type ReactMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export interface State {
  from: number;
  to: number;
  minutes: number;
  simulations: number[][];
}

export type Action =
  | { type: 'from'; value: number }
  | { type: 'to'; value: number }
  | { type: 'minutes'; value: number }
  | { type: 'addSimulation'; value: number[] };

export type DDD = 11 | 16 | 17 | 18;
