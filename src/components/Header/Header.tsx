import React from 'react';
import { Barbell, House, User, Power } from 'phosphor-react';
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
          <House size={35} color={location.pathname !== '/feed' ? '#8d8d99' : '#FF9000'} />
        </Link>
        <Styles.VerticalLine />
        <Link to="/profile">
          <User size={35} color={location.pathname !== '/profile' ? '#8d8d99' : '#FF9000'} />
        </Link>
      </Styles.CenterIcons>
      <Styles.RightIcon>
        <Link to="/">
          <Power size={35} color="#8d8d99" />
        </Link>
      </Styles.RightIcon>
    </Styles.Header>
  );
}