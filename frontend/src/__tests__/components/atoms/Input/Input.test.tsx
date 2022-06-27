import '.../../../mocks/framer-motion';
import { fireEvent, render } from '@testing-library/react';
import Input from '@/atoms/Input';

describe('atoms/Input', () => {
  it('renders Input with props.value', () => {
    const { container } = render(
      <Input value="I am value" />,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders Input with props.id', () => {
    const { container } = render(
      <Input id="InputId" />,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders Input with props.placeholder', () => {
    const { container } = render(
      <Input placeholder="I am placeholder" />,
    );
    expect(container).toMatchSnapshot();
  });
  it('rendres Input with props.multiLine', () => {
    const { container } = render(
      <Input multiLine />,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders Input with porps.truncate', () => {
    const { container } = render(
      <Input truncate />,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders Input with props.inputType=number', () => {
    const { container } = render(
      <Input inputType="number" />,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders Input with props.keyboard=search', () => {
    const { container } = render(
      <Input keyboard="search" />,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders Input with props.keyboard=numeric', () => {
    const { container } = render(
      <Input keyboard="numeric" />,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders Input with props.numberStep', () => {
    const { container } = render(
      <Input numberStep={3} />,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders Input with props.numberMin', () => {
    const { container } = render(
      <Input numberMin={3} />,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders Input with props.textAlign', () => {
    const { container } = render(
      <Input textAlign="right" />,
    );
    expect(container).toMatchSnapshot();
  });
  it('Input accepts submit event', () => {
    const handleSubmit = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="input" disabled={false} onSubmit={handleSubmit} />,
    );
    fireEvent.keyDown(getByPlaceholderText('input'), {
      key: 'Enter',
    });
    expect(handleSubmit).toBeCalledTimes(1);
  });
  it('Input accepts change event', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="input" disabled={false} onChange={handleChange} />,
    );
    fireEvent.change(getByPlaceholderText('input'), {
      target: {
        value: 'a',
      },
    });
    expect(handleChange).toBeCalledTimes(1);
  });
  it('Input accepts keydown event', () => {
    const handleKeydown = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="input" disabled={false} onKeyDown={handleKeydown} />,
    );
    fireEvent.keyDown(getByPlaceholderText('input'), {
      key: 'Enter',
    });
    expect(handleKeydown).toBeCalledTimes(1);
  });
});
