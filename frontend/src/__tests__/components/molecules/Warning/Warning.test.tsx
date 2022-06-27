import '.../../../mocks/framer-motion';
import { render, fireEvent } from '@testing-library/react';
import Warning from '@/molecules/Warning';

describe('molecules/Warning', () => {
  it('Warning should render', () => {
    const { container } = render(
      <Warning
        show
        message="I am warning message"
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('Warning should have message text', () => {
    const { getByText } = render(
      <Warning
        show
        message="I am warning message"
      />,
    );
    const text = getByText('I am warning message');
    expect(text).toBeDefined();
  });
  it('Warning should render (hidden state)', () => {
    const { container } = render(
      <Warning
        show={false}
        message="I am warning message"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
