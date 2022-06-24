/* eslint-disable import/prefer-default-export */
const DURATION = 0.3;

export const getToggleAnimations = (enterDelay:number, exitDelay:number) => ({
  svg: {
    enter: {
      opacity: 1,
      transition: {
        delay: DURATION * enterDelay,
        duration: 0,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0,
        when: 'afterChildren',
      },
    },
  },
  path: {
    enter: {
      pathLength: 1,
      transition: {
        duration: DURATION,
      },
    },
    exit: {
      pathLength: 0,
      transition: {
        delay: DURATION * exitDelay,
        duration: DURATION,
      },
    },
  },
});
