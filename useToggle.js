import { useCallback } from "react";

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggleOn = useCallback(() => setValue(true), []);
  const toggleOff = useCallback(() => setValue(false), []);

  const toggle = useCallback(() => setValue((v) => !v), []);

  return { value, toggleOn, toggleOff, toggle };
}

export default useToggle;
