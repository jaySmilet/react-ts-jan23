import * as React from 'react';

interface lsProps {
  key: string;
  initialValue: string;
}

const useLocalStorage = ({ key, initialValue }: lsProps) => {
  const [value, setValue] = React.useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
