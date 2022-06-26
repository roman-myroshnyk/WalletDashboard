/* eslint-disable import/prefer-default-export */
import * as colors from '@/styles/colors';

export const animations = {
  default: {
    background: colors.BLUE,
    scale: 1,
  },
  hover: {
    background: colors.BLUE,
    scale: 1.06,
  },
  pressed: {
    background: colors.DARK_BLUE,
    scale: 0.95,
  },
  disabled: {
    background: colors.LIGHT_BLACK,
    scale: 1,
  },

};

export const transition = {
  scale: {
    type: 'spring',
    stiffness: 600,
    mass: 1,
    duration: 0.3,
    delay: 0,
    damping: 30,
  },
};
