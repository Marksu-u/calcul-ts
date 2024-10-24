import React from "react";
import { ConverterProps } from "../../types/converter";

const TemperatureConverter: React.FC<ConverterProps> = ({ fromValue, toValue, onValueChange }) => {
  const handleCelsiusChange = (value: string) => {
    const fahValue = value ? ((parseFloat(value) * 9) / 5 + 32).toFixed(2) : "";
    onValueChange(value, fahValue);
  };

  const handleFahrenheitChange = (value: string) => {
    const celValue = value ? (((parseFloat(value) - 32) * 5) / 9).toFixed(2) : "";
    onValueChange(celValue, value);
  };

  return (
    <div className="converter-inputs">
      <div>
        <label>Celsius:</label>
        <input
          type="number"
          value={fromValue}
          onChange={(e) => handleCelsiusChange(e.target.value)}
          placeholder="Enter Celsius"
        />
      </div>
      <div>
        <label>Fahrenheit:</label>
        <input
          type="number"
          value={toValue}
          onChange={(e) => handleFahrenheitChange(e.target.value)}
          placeholder="Enter Fahrenheit"
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;