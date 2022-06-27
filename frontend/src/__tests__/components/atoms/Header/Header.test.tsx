import { render } from '@testing-library/react';
import Header from '@/atoms/Header';

describe('atoms/Header', () => {
  it('renders Header', () => {
    const { container } = render(<Header>I am header</Header>);
    expect(container).toMatchSnapshot();
  });
});
