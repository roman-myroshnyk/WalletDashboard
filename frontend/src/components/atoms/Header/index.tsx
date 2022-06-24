import { FC, ReactNode } from 'react';
import styles from './Header.module.scss';

export interface IProps {
    children: ReactNode;
}

const Header: FC<IProps> = ({ children }) => (
  <header className={styles.header}>
    {children}
  </header>
);

export default Header;
