import '.../../../mocks/framer-motion';
import { render, fireEvent } from '@testing-library/react';
import TextInput from '@/molecules/TextInput';

describe('molecules/TextInput', () => {
  it('TextInput should render', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { container } = render(
      <TextInput
        value="I am text input"
        placeholder="I am placeholder"
        disabled={false}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('TextInput should render disabled state', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { container } = render(
      <TextInput
        value="I am text input"
        placeholder="I am placeholder"
        disabled
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('TextInput should handle change', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <TextInput
        value="I am text input"
        placeholder="I am placeholder"
        disabled={false}
        onSubmit={handleSubmit}
        onChange={handleChange}
        testid="text input"
      />,
    );
    const input = getByTestId('text input');
    fireEvent.change(input, {
      target: {
        value: 'a',
      },
    });
    expect(handleChange).toBeCalledTimes(1);
  });
  it('TextInput should handle Submit', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <TextInput
        value="I am text input"
        placeholder="I am placeholder"
        disabled={false}
        onSubmit={handleSubmit}
        onChange={handleChange}
        testid="text input"
      />,
    );
    const input = getByTestId('text input');
    fireEvent.keyDown(input, {
      key: 'Enter',
    });
    expect(handleSubmit).toBeCalledTimes(1);
  });
});
