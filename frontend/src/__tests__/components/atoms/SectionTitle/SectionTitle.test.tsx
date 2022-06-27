import '.../../../mocks/framer-motion';
import { render } from '@testing-library/react';
import SectionTitle from '@/atoms/SectionTitle';

describe('atoms/SectionTitle', () => {
  it('SectionTitle should render', () => {
    const { container } = render(
      <SectionTitle>
        My section title
      </SectionTitle>,
    );
    expect(container).toMatchSnapshot();
  });
});
