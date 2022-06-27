import '../../../mocks/framer-motion';
import { fireEvent, render } from '@testing-library/react';
import IconButton from '@/atoms/IconButton';
import ConfirmIcon from '@/icons/ConfirmIcon';

describe('atoms/IconButton', () => {
  it('renders IconButton in normal state', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <IconButton
        isShown
        disabled={false}
        label="Icon button"
        onClick={handleClick}
      >
        <ConfirmIcon />
      </IconButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders IconButton in disabled state', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <IconButton
        hasInitialAnimation
        isShown={false}
        disabled={false}
        label="Icon button"
        onClick={handleClick}
      >
        <ConfirmIcon />
      </IconButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders IconButton isShown=true', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <IconButton
        isShown
        disabled={false}
        label="Icon button"
        onClick={handleClick}
      >
        <ConfirmIcon />
      </IconButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders IconButton isShown=false', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <IconButton
        isShown
        disabled={false}
        label="Icon button"
        onClick={handleClick}
      >
        <ConfirmIcon />
      </IconButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders IconButton hasInitialAnimation=false', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <IconButton
        hasInitialAnimation={false}
        isShown
        disabled={false}
        label="Icon button"
        onClick={handleClick}
      >
        <ConfirmIcon />
      </IconButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders IconButton hasInitialAnimation=true', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <IconButton
        hasInitialAnimation
        isShown
        disabled={false}
        label="Icon button"
        onClick={handleClick}
      >
        <ConfirmIcon />
      </IconButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it('IconButton disabled=false onClick should fire', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <IconButton
        hasInitialAnimation={false}
        isShown
        disabled={false}
        label="Icon button"
        onClick={handleClick}
      >
        <ConfirmIcon />
      </IconButton>,
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });

  it('IconButton disabled=true  onClick should not fire', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <IconButton
        hasInitialAnimation
        isShown={false}
        disabled
        label="Icon button"
        onClick={handleClick}
      >
        <ConfirmIcon />
      </IconButton>,
    );
    fireEvent.click(container);
    expect(handleClick).toBeCalledTimes(0);
  });
});
