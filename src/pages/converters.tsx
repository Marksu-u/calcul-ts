import React, { useState } from "react";
import { ConversionType } from "../types/converter";
import TemperatureConverter from "../components/converters/temperature";
import LengthConverter from "../components/converters/length";
import VolumeConverter from "../components/converters/volume";
import Button from "../components/button";

const Converter: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ConversionType>('temperature');
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");

  const handleValueChange = (from: string, to: string) => {
    setFromValue(from);
    setToValue(to);
  };

  const handleClear = () => {
    setFromValue("");
    setToValue("");
  };

  const renderConverter = () => {
    const props = {
      fromValue,
      toValue,
      onValueChange: handleValueChange,
    };

    switch (selectedType) {
      case 'temperature':
        return <TemperatureConverter {...props} />;
      case 'length':
        return <LengthConverter {...props} />;
      case 'volume':
        return <VolumeConverter {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="converter-container">
      <div className="converter-select">
        <label>Select conversion type:</label>
        <select 
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value as ConversionType);
            handleClear();
          }}
          className="converter-select-input"
        >
          <option value="temperature">Temperature</option>
          <option value="length">Length</option>
          <option value="volume">Volume</option>
        </select>
      </div>

      {renderConverter()}
      
      <Button value="Clear" onClick={handleClear} />
    </div>
  );
};

export default Converter;