import React from 'react';
import Router from 'next/router';
import WalletSearch from '@/organisms/WalletSearch';
import {
  render, fireEvent, screen,
} from '../../../utils/test-utils';

const pushSpy = jest.spyOn(Router, 'push');

afterEach(() => {
  jest.clearAllMocks();
});
describe('organisms/WalletSearch', () => {
  it('shows wallet search', () => {
    render(<WalletSearch />);
    const textInput = screen.getByTestId('text input');
    const button = screen.getByTestId('button');
    expect(textInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('calls Router.push if has input value', () => {
    render(<WalletSearch />);
    const textInput = screen.getByTestId('text input');
    const button = screen.getByTestId('button');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    pushSpy.mockImplementationOnce(() => null);
    fireEvent.change(textInput, {
      target: {
        value: '243242fsdfasfas',
      },
    });
    fireEvent.click(button);
    expect(pushSpy).toHaveBeenCalledTimes(1);
  });
  it('doesnt call Router.push if has not input value', () => {
    render(<WalletSearch />);
    const textInput = screen.getByTestId('text input');
    const button = screen.getByTestId('button');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    pushSpy.mockImplementationOnce(() => null);
    fireEvent.change(textInput, {
      target: {
        value: '',
      },
    });
    fireEvent.click(button);
    expect(pushSpy).toHaveBeenCalledTimes(0);
  });
});
