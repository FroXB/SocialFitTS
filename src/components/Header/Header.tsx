import React from 'react';
import { Barbell, House, User } from 'phosphor-react';
import * as Styles from './Header.styles.ts';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  return (
    <Styles.Header>
      <Styles.LeftIcon>
        <Barbell size={50} color="#FF9000" />
      </Styles.LeftIcon>
      <Styles.CenterIcons>
        <Link to="/feed">
          <House size={50} color={location.pathname === '/feed' ? '#121214' : '#FF9000'} />
        </Link>
        <Styles.VerticalLine />
        <Link to="/profile">
          <User size={50} color={location.pathname === '/profile' ? '#121214' : '#FF9000'} />
        </Link>
      </Styles.CenterIcons>
    </Styles.Header>
  );
}