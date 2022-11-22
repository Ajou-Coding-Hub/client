import { useCallback, useState } from "react";

export const useForm = <T = {}>(ids: string[]) => {
  const [form, setFormData] = useState<T>(
    () =>
      ids.reduce(
        (result, elem) => ({
          ...result,
          [elem]: "",
        }),
        {}
      ) as T
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setFormData((_form) => ({
        ..._form,
        [e.target.id]: e.target.value,
      }));
    },
    []
  );

  return { form, handleChange };
};
