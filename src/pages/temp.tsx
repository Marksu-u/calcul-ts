import React, { useState } from "react";
import Button from "../components/button";

const TemperatureConverter: React.FC = () => {
    const [celsius, setCelsius] = useState<string>("");
    const [fahrenheit, setFahrenheit] = useState<string>("");

    const handleCelsiusChange = (value: string) => {
        setCelsius(value);
        if (value === "") {
            setFahrenheit("");
        } else {
            const fahValue = (parseFloat(value) * 9) / 5 + 32;
            setFahrenheit(fahValue.toFixed(2));
        }
    };

    const handleFahrenheitChange = (value: string) => {
        setFahrenheit(value);
        if (value === "") {
            setCelsius("");
        } else {
            const celValue = ((parseFloat(value) - 32) * 5) / 9;
            setCelsius(celValue.toFixed(2));
        }
    };

    const handleClear = () => {
        setCelsius("");
        setFahrenheit("");
    };

    return (
        <div className="temperature-converter">
            <div className="converter-inputs">
                <div>
                    <label>Celsius:</label>
                    <input
                        type="number"
                        value={celsius}
                        onChange={(e) => handleCelsiusChange(e.target.value)}
                        placeholder="Enter Celsius"
                    />
                </div>
                <div>
                    <label>Fahrenheit:</label>
                    <input
                        type="number"
                        value={fahrenheit}
                        onChange={(e) => handleFahrenheitChange(e.target.value)}
                        placeholder="Enter Fahrenheit"
                    />
                </div>
            </div>
            <Button value="Clear" onClick={handleClear} />
        </div>
    );
};

export default TemperatureConverter;