/* eslint-disable import/prefer-default-export */
import * as colors from '@/styles/colors';

export const animations = {
  default: {
    background: colors.BLUE,
    color: colors.WHITE,
    scale: 1,
  },
  hover: {
    background: colors.BLUE,
    color: colors.WHITE,
    scale: 1.06,
  },
  pressed: {
    background: colors.DARK_BLUE,
    color: colors.WHITE,
    scale: 0.95,
  },
  disabled: {
    background: colors.LIGHT_BLACK,
    color: colors.DARK_WHITE,
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
