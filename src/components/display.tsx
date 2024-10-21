import React from "react";

interface DisplayProps {
    input: string;
    result: string;
}

const Display: React.FC<DisplayProps> = ({ input, result }) => {
    return (
        <div className="calculator-display">
            <div className="calculator-input">{input}</div>
            <div className="calculator-result">{result}</div>
        </div>
    );
};

export default Display;