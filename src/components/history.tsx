import React from 'react'

interface HistoryItem {
    expression: string;
    result: string;
}

interface HistoryProps {
    items: HistoryItem[];
    onItemClick: (expression: string) => void;
}

const History: React.FC<HistoryProps> = ({ items, onItemClick }) => {
    return (
        <div className="history">
            <h3>Historique</h3>
            <ul className='history-list'>
                {items.map((item, index) => (
                    <li key={index} onClick={() => onItemClick(item.expression)}>
                        <span className='expression'>{item.expression}</span>
                        <span className='result'>{item.result}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;