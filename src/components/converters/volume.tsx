import React from "react";
import { ConverterProps } from "../../types/converter";

const VolumeConverter: React.FC<ConverterProps> = ({ fromValue, toValue, onValueChange }) => {
    const handleMillilitersChange = (value: string) => {
      const literValue = value ? (parseFloat(value) / 1000).toFixed(2) : "";
      onValueChange(value, literValue);
    };
  
    const handleLitersChange = (value: string) => {
      const mlValue = value ? (parseFloat(value) * 1000).toFixed(2) : "";
      onValueChange(mlValue, value);
    };
  
    return (
      <div className="converter-inputs">
        <div>
          <label>Milliliters:</label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => handleMillilitersChange(e.target.value)}
            placeholder="Enter milliliters"
          />
        </div>
        <div>
          <label>Liters:</label>
          <input
            type="number"
            value={toValue}
            onChange={(e) => handleLitersChange(e.target.value)}
            placeholder="Enter liters"
          />
        </div>
      </div>
    );
  };

export default VolumeConverter;