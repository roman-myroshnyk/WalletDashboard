import { fireEvent, render } from '@testing-library/react';
import Button from '@/atoms/Button';

describe('atoms/Button', () => {
  it('renders Button in normal state', () => {
    const { container } = render(<Button text="I am button" disabled={false} />);
    expect(container).toMatchSnapshot();
  });

  it('renders Button in disabled state', () => {
    const { container } = render(<Button text="I am button" disabled />);
    expect(container).toMatchSnapshot();
  });

  it('Button is enabled, onClick should fire', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button
      text="I am button"
      disabled={false}
      onClick={handleClick}
    />);
    const button = getByText('I am button');
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });

  it('Button is disabled, onClick should not fire', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button
      text="I am button"
      disabled
      onClick={handleClick}
    />);
    const button = getByText('I am button');
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(0);
  });
});
