import '.../../../mocks/framer-motion';
import { render } from '@testing-library/react';
import Label from '@/atoms/Label';

describe('atoms/Label', () => {
  it('Label should render', () => {
    const { container } = render(
      <Label htmlFor="myInput">
        My label
      </Label>,
    );
    expect(container).toMatchSnapshot();
  });
});
