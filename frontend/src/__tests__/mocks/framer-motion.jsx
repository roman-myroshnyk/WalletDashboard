/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
jest.mock('framer-motion', () => {
  const FakeTransition = jest
    .fn()
    .mockImplementation(({ children }) => children);

  const FakeAnimatePresence = jest
    .fn()
    .mockImplementation(({ children }) => (
      <FakeTransition>{children}</FakeTransition>
    ));

  const motion = {
    a: jest
      .fn()
      .mockImplementation(({ children, ...rest }) => (
        <a {...rest}>{children}</a>
      )),
    li: jest.fn().mockImplementation(({ children }) => children),
    span: jest.fn().mockImplementation(({ children }) => children),
    small: jest
      .fn()
      .mockImplementation(({ children }) => <small>{children}</small>),
    h4: jest.fn().mockImplementation(({ children }) => <h4>{children}</h4>),
    h2: jest.fn().mockImplementation(({ children }) => <h2>{children}</h2>),
    p: jest.fn().mockImplementation(({ children }) => <p>{children}</p>),
    div: require('react').forwardRef(({ children, ...rest }, ref) => {
      const {
        whileTap, animate, initial, variants, ...divProps
      } = rest;
      return (
        <div {...divProps} ref={ref}>
          {children}
        </div>
      );
    }),
    button: jest
      .fn()
      .mockImplementation(({
        children, whileTap, whileHover, ...rest
      }) => (
        <button {...rest}>{children}</button>
      )),
    svg: jest
      .fn()
      .mockImplementation(({ children, ...rest }) => (
        <svg {...rest}>{children}</svg>
      )),
    path: jest
      .fn()
      .mockImplementation(({ children, ...rest }) => (
        <path {...rest}>{children}</path>
      )),
    custom: jest.fn().mockImplementation((props) => props),
  };

  return {
    __esModule: true,
    motion,
    AnimatePresence: FakeAnimatePresence,
    default: jest.fn(),
  };
});
