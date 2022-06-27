import { render } from '@testing-library/react';
import CancelIcon from '@/icons/CancelIcon';
import ConfirmIcon from '@/icons/ConfirmIcon';
import EditIcon from '@/icons/EditIcon';
import LoadingIcon from '@/icons/LoadingIcon';
import WarningIcon from '@/icons/WarningIcon';

describe('Icons', () => {
  it('renders CancelIcon', () => {
    const { container } = render(<CancelIcon />);
    expect(container).toMatchSnapshot();
  });

  it('renders ConfirmIcon', () => {
    const { container } = render(<ConfirmIcon />);
    expect(container).toMatchSnapshot();
  });

  it('renders EditIcon', () => {
    const { container } = render(<EditIcon />);
    expect(container).toMatchSnapshot();
  });

  it('renders LoadingIcon', () => {
    const { container } = render(<LoadingIcon />);
    expect(container).toMatchSnapshot();
  });

  it('renders WarningIcon', () => {
    const { container } = render(<WarningIcon />);
    expect(container).toMatchSnapshot();
  });
});
