import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [checked, setChecked] = useState(initialState);
  const toggle = useCallback(() => setChecked((state) => !state), []);

  return { checked, toggle };
};

export default useToggle;
