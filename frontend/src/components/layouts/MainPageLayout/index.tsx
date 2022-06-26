import { FC, ReactNode } from 'react';
import styles from './MainPageLayout.module.scss';

interface IProps {
    children: ReactNode;
}
const MainPageLayout:FC<IProps> = ({ children }) => (
  <div className={styles.mainPageLayout}>
    <div className={styles.walletSearch}>
      {children}
    </div>
  </div>
);

export default MainPageLayout;
