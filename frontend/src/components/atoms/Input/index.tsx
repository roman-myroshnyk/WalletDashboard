/* eslint-disable react/prop-types */

import {
  FC,
  useCallback,
  useRef,
  useMemo,
  InputHTMLAttributes,
  HTMLAttributes,
  ChangeEvent,
  LegacyRef,
  CSSProperties,
} from 'react';
import { useControlledState } from '@/hooks/useControledState';
import styles from './Input.module.scss';

export interface IProps {
    value?: string | number | readonly string[];
    id?:string;
    placeholder?: string;
    onSubmit?: () => void;
    onChange?: (value: string) => void;
    onKeyDown?: (e:KeyboardEvent) => void;
    disabled?: boolean;
    multiLine?: boolean;
    truncate?: boolean;
    blurOnSubmit?: boolean;
    inputType?: InputHTMLAttributes<HTMLInputElement>['type'];
    keyboard?: HTMLAttributes<HTMLInputElement>['inputMode'];
    numberStep?:number;
    numberMin?: number;
    textAlign?: CSSProperties['textAlign'];
}

const Input: FC<IProps> = ({
  value,
  id,
  placeholder,
  onSubmit,
  onChange,
  onKeyDown,
  disabled,
  multiLine,
  truncate,
  blurOnSubmit,
  inputType,
  keyboard,
  numberMin,
  numberStep,
  textAlign,
}) => {
  const [inputValue, setValue] = useControlledState<string | number | readonly string[]>(value);

  const inputEle = useRef<HTMLInputElement | HTMLTextAreaElement>();

  const Tag = useMemo(
    () => (multiLine ? 'textarea' : 'input'),
    [multiLine],
  );

  const handleChange = useCallback(
    (event: ChangeEvent) => {
      const element = multiLine
        ? (event.nativeEvent.target as HTMLTextAreaElement)
        : (event.nativeEvent.target as HTMLInputElement);
      const { value } = element;

      setValue(value);
      if (onChange) onChange(value);
    },
    [multiLine, setValue, onChange],
  );
  const handleKeyDown = useCallback((e:unknown) => {
    if (onKeyDown) onKeyDown(e as KeyboardEvent);
    if ((e as KeyboardEvent).key === 'Enter') {
      if (blurOnSubmit && inputEle.current) { inputEle.current.blur(); }
      if (onSubmit) onSubmit();
    }
  }, [blurOnSubmit, onKeyDown, onSubmit]);
  return (
    <Tag
      style={{
        textAlign,
      }}
      onChange={handleChange}
      ref={inputEle as LegacyRef<HTMLTextAreaElement> & LegacyRef<HTMLInputElement>}
      value={inputValue || ''}
      id={id}
      placeholder={placeholder}
      type={inputType}
      step={numberStep}
      min={numberMin}
      inputMode={keyboard}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={`${styles.tag} ${truncate && styles.tagTruncate}`}
      rows={1}
    />
  );
};

export default Input;

Input.defaultProps = {
  value: '',
  id: '',
  placeholder: 'Type something…',
  onSubmit: undefined,
  onChange: undefined,
  onKeyDown: undefined,
  disabled: false,
  multiLine: false,
  truncate: false,
  blurOnSubmit: true,
  inputType: 'text',
  keyboard: 'text',
  numberStep: 0.5,
  numberMin: 1,
  textAlign: 'left',
};
