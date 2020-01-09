import { ChangeEvent } from 'react';

export type ReactChangeEvent = ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;

export interface State {
  from: number;
  to: number;
}

export type Action =
  | { type: 'from'; value: number }
  | { type: 'to'; value: number };
