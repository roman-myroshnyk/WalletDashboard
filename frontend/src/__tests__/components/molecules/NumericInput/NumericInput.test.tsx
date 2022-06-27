import '.../../../mocks/framer-motion';
import { render, fireEvent } from '@testing-library/react';
import NumericInput from '@/molecules/NumericInput';

describe('molecules/NumericInput', () => {
  it('NumericInput should render', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { container } = render(
      <NumericInput
        value={23}
        id="numeric input"
        disabled={false}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('NumericInput should render disabled state', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { container } = render(
      <NumericInput
        value={23}
        id="numeric input"
        disabled
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('NumericInput should handle change', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <NumericInput
        value={23}
        id="numeric input"
        disabled={false}
        onSubmit={handleSubmit}
        onChange={handleChange}
        testid="numeric input"
      />,
    );
    const input = getByTestId('numeric input');
    fireEvent.change(input, {
      target: {
        value: '2',
      },
    });
    expect(handleChange).toBeCalledTimes(1);
  });
  it('NumericInput should not respond to non-numeric keys', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <NumericInput
        value={23}
        id="numeric input"
        disabled={false}
        onSubmit={handleSubmit}
        onChange={handleChange}
        testid="numeric input"
      />,
    );
    const input = getByTestId('numeric input');
    fireEvent.keyDown(input, {
      target: {
        value: 'e',
      },
    });
    fireEvent.keyDown(input, {
      target: {
        value: 'E',
      },
    });
    fireEvent.keyDown(input, {
      target: {
        value: '+',
      },
    });
    fireEvent.keyDown(input, {
      target: {
        value: '-',
      },
    });
    expect(handleChange).toBeCalledTimes(0);
  });
  it('NumericInput should handle Submit', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <NumericInput
        value={23}
        id="numeric input"
        disabled={false}
        onSubmit={handleSubmit}
        onChange={handleChange}
        testid="numeric input"
      />,
    );
    const input = getByTestId('numeric input');
    fireEvent.keyDown(input, {
      key: 'Enter',
    });
    expect(handleSubmit).toBeCalledTimes(1);
  });
});
