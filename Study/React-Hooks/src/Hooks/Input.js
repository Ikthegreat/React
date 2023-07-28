import { useState } from "react";

function Input() {
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };
  const maxLength = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLength);
  return (
    <div>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}

export default Input;
