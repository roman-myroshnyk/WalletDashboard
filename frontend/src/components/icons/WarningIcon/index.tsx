import { FC } from 'react';
import { motion } from 'framer-motion';

export interface IProps {
  height?: number;
  width?: number;
}

const WarningIcon:FC<IProps> = ({ width, height }) => (
  <motion.div
    style={{
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      width,
      height,
    }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: 'spring',
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.6,
      repeatDelay: 2,
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  </motion.div>
);

WarningIcon.defaultProps = {
  height: 24,
  width: 24,
};

export default WarningIcon;