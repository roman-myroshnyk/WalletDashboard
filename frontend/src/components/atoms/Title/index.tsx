import { FC, ReactNode } from 'react';
import styles from './Title.module.scss';

export interface IProps {
    children: ReactNode;
}

const Title:FC<IProps> = ({ children }) => (
  <h3 className={styles.title}>
    {children}
  </h3>
);

export default Title;
