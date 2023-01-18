import { useCallback, useState } from 'react';

function useToggle(
  defaultValue?: boolean,
): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(!!defaultValue)

  const isToggle = useCallback(() => setValue(x => !x), [])

  return [value, isToggle];
}

export default useToggle;