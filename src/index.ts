import { useEffect, useState } from 'react';
import { IuseAnimateNumber } from './types';

const useAnimateNumber:IuseAnimateNumber = (initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState)
  }, [initialState])

  return [state, setState]
};

export { useAnimateNumber }
export default useAnimateNumber
