import { FC, MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { animations, transition } from '@/animations/ButtonAnimations';
import styles from './Button.module.scss';

export interface IProps {
    text: string
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button:FC<IProps> = ({ text, disabled, onClick }) => (
  <motion.button
    className={styles.button}
    type="button"
    transition={transition}
    initial="default"
    animate="default"
    variants={animations}
    disabled={disabled}
    whileHover="hover"
    whileTap="pressed"
    {...(!disabled && {
      onClick,
    })}
  >
    {text}
  </motion.button>
);

Button.defaultProps = {
  disabled: false,
  onClick: undefined,
};

export default Button;
