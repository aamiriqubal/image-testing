import React, { useState } from "react";

const SeparateNumberInput = (): JSX.Element => {
  const inputs: number[] = [0, 0, 0, 0];
  const [myInputs, setInputs] = useState<number[]>(inputs);
  const handleOnchangeInput = (newVal: string, key: number) => {
    const value = parseFloat(newVal);
    setInputs(myInputs.map((preVal, index) => index === key ? value :preVal));
  };

  return (
    <>
      <div>
        {myInputs.map((val, index) => (
          <input
            key={`input-field-${index}`}
            type="number"
            className="input-field"
            value={val}
            onChange={(e) => handleOnchangeInput(e.target.value, index)}
          />
        ))}
      </div>
    </>
  );
};

export default SeparateNumberInput;
