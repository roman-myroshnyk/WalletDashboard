import { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as colors from '@/styles/colors';
import styles from './IconButton.module.scss';

export interface IProps {
  hasInitialAnimation?: boolean;
  isShown: boolean;
  disabled: boolean;
  label: string;
  onClick: () => void;
  children:ReactNode;
}

const variants = {
  whileHover: {
    color: colors.BLUE,
    scale: 1.1,
    transition: {
      duration: 0.4,
    },
  },
  whileHoverDisabled: {
    scale: 1,
  },
  whileTap: {
    backgroundColor: colors.LIGHT_BLACK,
    transition: {
      duration: 0.1,
    },
  },
  whileTapDisabled: {
    backgroundColor: 'transparent',
  },
};

const IconButton:FC<IProps> = ({
  hasInitialAnimation, isShown, disabled, label, onClick, children,
}) => (
  <div>
    <AnimatePresence initial={hasInitialAnimation} exitBeforeEnter>
      {isShown && (
      <motion.button
        area-label={label}
        onClick={onClick}
        disabled={disabled}
        className={styles.iconButton}
        whileHover={disabled ? 'whileHoverDisabled' : 'whileHover'}
        whileTap={disabled ? 'whileTapDisabled' : 'whileTap'}
        variants={variants}
      >
        {children}
      </motion.button>
      )}
    </AnimatePresence>
  </div>
);

IconButton.defaultProps = {
  hasInitialAnimation: false,
};

export default IconButton;
