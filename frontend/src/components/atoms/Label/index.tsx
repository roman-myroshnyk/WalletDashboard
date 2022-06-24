import { FC, ReactNode } from 'react';
import styles from './Label.module.scss';

export interface IProps {
    htmlFor?: string;
    children: ReactNode;
}

const Label:FC<IProps> = ({ htmlFor, children }) => (
  <label className={styles.inputLink} htmlFor={htmlFor}>
    {children}
  </label>
);

Label.defaultProps = {
  htmlFor: 'id',
};
export default Label;
