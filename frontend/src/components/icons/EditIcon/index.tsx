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

const EditIcon:FC<IProps> = ({
  label, height, width, enterDelay, exitDelay,
}) => {
  const variants = getToggleAnimations(enterDelay, exitDelay);
  return (
    <motion.svg
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants.svg}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      aria-label={label}
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <motion.path
        variants={variants.path}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </motion.svg>
  );
};

EditIcon.defaultProps = {
  label: 'editIcon',
  height: 24,
  width: 24,
  enterDelay: 0,
  exitDelay: 0,
};

export default EditIcon;
