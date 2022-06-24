/* eslint-disable import/prefer-default-export */
import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';

export function useControlledState<T>(value:T):[T, Dispatch<SetStateAction<T>>] {
  const [controlledValue, setValue] = useState<T>(value);
  useEffect(() => {
    setValue(value);
  }, [
    value,
  ]);
  return [
    controlledValue,
    setValue,
  ];
}
