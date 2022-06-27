import '.../../../mocks/framer-motion';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from '@/molecules/Dropdown';

describe('molecules/Dropdown', () => {
  it('Dropdown should render', () => {
    const { container } = render(
      <Dropdown
        options={[
          'my option 1',
          'my option 2',
        ]}
        value={1}
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('Dropdown should trigger onChange handler', () => {
    const handleChange = jest.fn();
    const { getByTestId, getAllByTestId } = render(
      <Dropdown
        options={[
          'my option 1',
          'my option 2',
        ]}
        value={0}
        onChange={handleChange}
      />,
    );
    const select = getByTestId('select');
    const options = getAllByTestId('option') as HTMLOptionElement[];
    fireEvent.change(select, { target: { value: 1 } });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
  });
  it('Dropdown should have disabled attribute', () => {
    const { getByTestId } = render(
      <Dropdown
        options={[
          'my option 1',
          'my option 2',
        ]}
        value={0}
        disabled
      />,
    );
    const select = getByTestId('select') as HTMLSelectElement;
    expect(select.disabled).toBeTruthy();
  });
});
