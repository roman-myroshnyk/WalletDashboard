import { FC } from 'react';
import { motion } from 'framer-motion';
import { getToggleAnimations } from '@/animations/ToggleAnimations';

export interface IProps {
  label?: string;
  height?: number;
  width?: number;
  enterDelay?: number;
  exitDelay?: number;
 }

const ConfirmIcon:FC<IProps> = ({
  label, height, width, enterDelay, exitDelay,
}) => {
  const variants = getToggleAnimations(enterDelay, exitDelay);
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      aria-label={label}
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants.svg}
    >
      <motion.path
        variants={variants.path}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />

    </motion.svg>
  );
};

ConfirmIcon.defaultProps = {
  label: 'confirmIcon',
  height: 24,
  width: 24,
  enterDelay: 0,
  exitDelay: 0,
};

export default ConfirmIcon;
