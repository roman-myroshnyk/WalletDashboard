import { FC } from 'react';
import Input from '@/atoms/Input/index';

export interface IProps {
  value: string;
  placeholder:string;
  disabled:boolean;
  onSubmit: () => void;
  onChange: (value:string) => void;
}

const TextInput:FC<IProps> = ({
  value,
  placeholder,
  disabled,
  onSubmit,
  onChange,
}) => (
  <Input
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onSubmit={onSubmit}
    onChange={onChange}
    multiLine={false}
    inputType="search"
    keyboard="search"
    truncate
  />
);

export default TextInput;
