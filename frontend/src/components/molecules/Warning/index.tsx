import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WarningIcon from '@/icons/WarningIcon';
import { animations } from '@/animations/WarningAnimations';
import styles from './Warning.module.scss';

export interface IProps {
    show: boolean;
    message: string;
}

const Warning:FC<IProps> = ({ show, message }) => (
  <div className={styles.container}>
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          initial="exit"
          animate="enter"
          exit="exit"
          variants={animations}
          className={styles.warning}
        >
          <span className={styles.warningIcon}>
            <WarningIcon />
          </span>
          <div className={styles.warningText}>
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>

);

export default Warning;
