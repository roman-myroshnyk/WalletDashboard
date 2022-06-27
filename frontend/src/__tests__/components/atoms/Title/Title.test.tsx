import '.../../../mocks/framer-motion';
import { render } from '@testing-library/react';
import Title from '@/atoms/Title';

describe('atoms/Title', () => {
  it('Title should render', () => {
    const { container } = render(
      <Title>
        My title
      </Title>,
    );
    expect(container).toMatchSnapshot();
  });
});
