import styles from './Header.module.css';

import { Barbell } from 'phosphor-react'

export function Header() {
  return (
    <header className={styles.header}>
      <Barbell size={50} color='#FF9000' weight='light'/>
    </header>
  );
}