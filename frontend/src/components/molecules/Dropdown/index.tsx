/* eslint-disable react/no-array-index-key */
import {
  FC,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import styles from './Dropdown.module.scss';

export interface IProps {
  options?:string[];
  value?: number;
  disabled?:boolean;
  onChange?: (index:number, label:string) => void;
}

const Dropdown: FC<IProps> = (props) => {
  const {
    options = [],
    disabled,
    value,
    onChange,
  } = props;

  const [currentValue, setCurrentValue] = useState(value);

  const handleSelectChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const index = parseInt(event.currentTarget.value, 10);
      const label = options[index];
      setCurrentValue(index);

      if (onChange) {
        onChange(index, label);
      }
    },
    [options, onChange],
  );

  useEffect(() => setCurrentValue(value), [value]);

  return (
    <select
      className={styles.select}
      disabled={disabled}
      style={{
        backgroundImage: 'url("/icons/shevron.svg")',
      }}
      value={currentValue}
      onChange={handleSelectChange}
    >
      {options.map((option, index) => (
        <option
          key={`option-${index}`}
          value={index}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

Dropdown.defaultProps = {
  value: 0,
  disabled: false,
  options: ['Option 1', 'Option 2'],
  onChange: undefined,
};

export default Dropdown;
