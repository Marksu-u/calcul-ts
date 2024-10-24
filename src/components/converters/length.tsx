import React from "react";
import { ConverterProps } from "../../types/converter";

const LengthConverter: React.FC<ConverterProps> = ({ fromValue, toValue, onValueChange }) => {
    const handleCentimetersChange = (value: string) => {
      const meterValue = value ? (parseFloat(value) / 100).toFixed(2) : "";
      onValueChange(value, meterValue);
    };
  
    const handleMetersChange = (value: string) => {
      const cmValue = value ? (parseFloat(value) * 100).toFixed(2) : "";
      onValueChange(cmValue, value);
    };
  
    return (
      <div className="converter-inputs">
        <div>
          <label>Centimeters:</label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => handleCentimetersChange(e.target.value)}
            placeholder="Enter centimeters"
          />
        </div>
        <div>
          <label>Meters:</label>
          <input
            type="number"
            value={toValue}
            onChange={(e) => handleMetersChange(e.target.value)}
            placeholder="Enter meters"
          />
        </div>
      </div>
    );
  };

export default LengthConverter;