import '.../../../mocks/framer-motion';
import { render, fireEvent } from '@testing-library/react';
import Snackbar from '@/atoms/Snackbar';

describe('atoms/Snackbar', () => {
  it('Snackbar should render', () => {
    const closeHandler = jest.fn();
    const { container } = render(
      <Snackbar message="I am snackbar message" onClose={closeHandler} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Snackbar should respond on click events', () => {
    const closeHandler = jest.fn();
    const { getByLabelText } = render(
      <Snackbar message="I am snackbar message" onClose={closeHandler} />,
    );
    const cancelButton = getByLabelText('cancel');
    fireEvent.click(cancelButton);
    expect(closeHandler).toBeCalledTimes(1);
  });
});
