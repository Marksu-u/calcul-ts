import React, { useState } from "react";
import Button from "../components/button";
import Display from "../components/display";

const Calculator: React.FC = () => {
    const [input , setInput] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const handleClick = (value: string) => {
        if (value === "=") {
            try {
                const evaluatedResult = eval(input);
                setResult(evaluatedResult);
            } catch {
                setResult("Error");
            }
        } else if (value === "C") {
            setInput("");
            setResult("");

        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <Display input={input} result={result} />
            <div className="calculator-buttons">
                {/* Ligne 1 */}
                <Button value="1" onClick={handleClick} />
                <Button value="2" onClick={handleClick} />
                <Button value="3" onClick={handleClick} />
                <Button value="+" onClick={handleClick} />
                {/* Ligne 2 */}
                <Button value="4" onClick={handleClick} />
                <Button value="5" onClick={handleClick} />
                <Button value="6" onClick={handleClick} />
                <Button value="-" onClick={handleClick} />
                {/* Ligne 3 */}
                <Button value="7" onClick={handleClick} />
                <Button value="8" onClick={handleClick} />
                <Button value="9" onClick={handleClick} />
                <Button value="*" onClick={handleClick} />
                {/* Ligne 4 */}
                <Button value="C" onClick={handleClick} />
                <Button value="0" onClick={handleClick} />
                <Button value="=" onClick={handleClick} />
                <Button value="/" onClick={handleClick} />
            </div>
        </div>
    )
};

export default Calculator;