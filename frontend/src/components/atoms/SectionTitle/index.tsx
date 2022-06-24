import { FC, ReactNode } from 'react';
import styles from './SectionTitle.module.scss';

export interface IProps {
    children: ReactNode;
}

const SectionTitle:FC<IProps> = ({ children }) => (
  <h3 className={styles.sectionTitle}>
    {children}
  </h3>
);

export default SectionTitle;
