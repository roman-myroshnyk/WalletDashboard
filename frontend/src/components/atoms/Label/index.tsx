import { FC, ReactNode } from 'react';
import styles from './Label.module.scss';

export interface IProps {
    htmlFor?: string;
    children: ReactNode;
    testid?: string;
}

const Label:FC<IProps> = ({ htmlFor, testid, children }) => (
  <label className={styles.inputLink} htmlFor={htmlFor} data-testid={testid}>
    {children}
  </label>
);

Label.defaultProps = {
  htmlFor: 'id',
  testid: 'label',
};
export default Label;
