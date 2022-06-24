import { FC, ReactNode } from 'react';
import styles from './MainPageLayout.module.scss';

interface IProps {
    children: ReactNode;
}
const MainPageLayout:FC<IProps> = ({ children }) => (
  <div className={styles.mainPageLayout}>
    {children}
  </div>
);

export default MainPageLayout;
