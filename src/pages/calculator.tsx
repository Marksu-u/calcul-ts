import React, { useState } from "react";
import Button from "../components/button";
import Display from "../components/display";
import History from "../components/history";

interface HistoryItem {
    expression: string;
    result: string;
}

const Calculator: React.FC = () => {
    const [input , setInput] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const [history, setHistory] = useState<HistoryItem[]>([]);

    const factorial = (num: number): number => {
        if (num === 0 || num === 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }

    const handleClick = (value: string) => {
        if (value === "=") {
            try {
                let evaluatedResult;
                if (input.includes("!")) {
                    const parts = input.split("!");
                    if (parts.length > 2 || parts[1] !== "") {
                        setResult("Invalid factorial expression");
                        return;
                    }
                    const num = parseInt(parts[0]);
                    if (isNaN(num) || num < 0) {
                        setResult("Error");
                        return;
                    }
                    evaluatedResult = factorial(num);
                } else {
                    evaluatedResult = eval(input);
                }
                const resultString = evaluatedResult.toString();
                setResult(resultString);
                setHistory([{ expression: input, result: resultString }, ...history.slice(0, 9)]);
            } catch {
                setResult("Error");
            }
        } else if (value === "C") {
            setInput("");
            setResult("");

        } else if (value === "!") {
            if (input && !isNaN(Number(input.slice(-1))) && !input.includes("!")) {
                setInput(input + "!");
            }
        } else {
            setInput(input + value);
        }
    };

    const handleHistoryItemClick = (expression: string) => {
        setInput(expression);
    }

    return (
        <div className="calculator-container">
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
                    {/* Ligne 5 */}
                    <Button value="!" onClick={handleClick} />
                </div>
            </div>
            <History items={history} onItemClick={handleHistoryItemClick} />
        </div>
    )
};

export default Calculator;