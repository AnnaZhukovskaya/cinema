import { ButtonTypes } from '../../../types/ButtonTypes';
import React from 'react';

export interface ICustomButton {
  text: string;
  mode?: 'primary' | 'danger' | 'warning';
  disabled?: boolean;
  type?: ButtonTypes;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
