import { FC } from 'react';
import { motion } from 'framer-motion';
import { getToggleAnimations } from '@/animations/ToggleAnimations';

export interface IProps {
  label?: string;
  height?: number;
  width?: number;
  enterDelay?:number;
  exitDelay?:number;
  testid?: string;
 }

const CancelIcon:FC<IProps> = ({
  label, height, width, enterDelay, exitDelay, testid,
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
      data-testid={testid}
    >
      <motion.path
        variants={variants.path}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 12"
      />
      <motion.path
        variants={variants.path}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6M6 6l12 12"
      />
    </motion.svg>
  );
};

CancelIcon.defaultProps = {
  label: 'cancelIcon',
  height: 24,
  width: 24,
  enterDelay: 0,
  exitDelay: 0,
  testid: 'cancelIcon',
};

export default CancelIcon;
