import { FC } from 'react';
import { motion } from 'framer-motion';

export interface IProps {
    height?: number;
    width?: number;
}

const LoadingIcon:FC<IProps> = ({ width, height }) => (
  <motion.div
    style={{
      width,
      height,
    }}
    initial={{ rotate: 0 }}
    animate={{ rotate: -360 }}
    transition={{
      type: 'tween',
      repeat: Infinity,
      repeatType: 'loop',
      duration: 0.8,
    }}
  >
    <motion.svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
        clipRule="evenodd"
      />
    </motion.svg>
  </motion.div>

);

LoadingIcon.defaultProps = {
  height: 20,
  width: 20,
};

export default LoadingIcon;
