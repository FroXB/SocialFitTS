import React from 'react';
import { Barbell } from 'phosphor-react';
import * as Styles from './Header.styles.ts';

export function Header() {
  return (
    <Styles.Header>
      <Barbell size={50} color='#FF9000' />
    </Styles.Header>
  );
}
