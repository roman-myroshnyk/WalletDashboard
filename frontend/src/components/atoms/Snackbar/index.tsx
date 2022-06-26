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
    snackbarKey:string;
}

const Snackbar:FC<IProps> = ({
  message,
  onClose,
  snackbarKey,
}) => (
  <motion.li
    className={styles.li}
    layout
    variants={animations}
  >
    <span className={styles.warningIcon}>
      <WarningIcon />
    </span>
    <span className={styles.text}>
      {message}
      {snackbarKey}
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

export default Snackbar;
