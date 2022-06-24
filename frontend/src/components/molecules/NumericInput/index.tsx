import { FC } from 'react';
import Input from '@/atoms/Input/index';

export interface IProps {
  value:number;
  id:string;
  disabled:boolean;
  onSubmit: () => void;
  onChange: (value:string) => void;
}
const NumericInput:FC<IProps> = ({
  value,
  id,
  disabled,
  onSubmit,
  onChange,
}) => {
  const handleKeyDown = (e:KeyboardEvent) => {
    if (['e', 'E', '+', '-'].includes(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <Input
      value={value}
      id={id}
      placeholder="Please, set exchange rate"
      disabled={disabled}
      onSubmit={onSubmit}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      multiLine={false}
      inputType="number"
      keyboard="decimal"
      truncate
      numberStep={0.01}
      numberMin={0.01}
      textAlign="right"
    />
  );
};

export default NumericInput;
