import { FC } from 'react';
import { motion } from 'framer-motion';
// components
import WarningIcon from '@/icons/WarningIcon';
import IconButton from '@/atoms/IconButton';
import CancelIcon from '@/icons/CancelIcon';
// styles
import { animations } from '@/animations/SnackbarAnimations';
import styles from './Snackbar.module.scss';

interface IProps {
    onClose: () => void;
    message: string;
    testid?: string
}

const Snackbar:FC<IProps> = ({
  message,
  onClose,
  testid,
}) => (
  <motion.li
    className={styles.li}
    layout
    variants={animations}
    data-testid={testid}
  >
    <span className={styles.warningIcon}>
      <WarningIcon />
    </span>
    <span className={styles.text}>
      {message}
    </span>
    <IconButton
      label="cancel"
      isShown
      disabled={false}
      onClick={onClose}
    >
      <CancelIcon
        label="cancel"
        enterDelay={1}
        exitDelay={1}
      />
    </IconButton>
  </motion.li>
);

Snackbar.defaultProps = {
  testid: 'snackbar',
};
export default Snackbar;
