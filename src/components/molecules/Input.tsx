import { classNames } from "@/utils/class";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ label, id, onChange, ...rest }: InputProps) {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="mt-3 block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        className={classNames(
          "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5",
          rest.disabled && "bg-gray-200"
        )}
        id={id}
        onChange={onChange}
        {...rest}
      />
    </>
  );
}

export default Input;
