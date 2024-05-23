import React from 'react';
import { Barbell } from 'phosphor-react';
import * as Styles from './Header.styles.ts';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Styles.Header>
      <Link to="/feed">
        <Barbell size={50} color="#FF9000" />
      </Link>
    </Styles.Header>
  );
}
