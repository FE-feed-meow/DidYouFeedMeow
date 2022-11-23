import { useCallback, useState } from "react";

const useInput = (initialData: any) => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback(
    (e: { target: { value: React.SetStateAction<string> } }) => {
      setValue(e.target.value);
    },
    [],
  );

  return [value, handler, setValue];
};

export default useInput;
