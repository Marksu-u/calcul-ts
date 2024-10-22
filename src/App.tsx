import React, { useState } from 'react'
import './App.css'
import Calculator from './pages/calculator'
import TemperatureConverter from './pages/temp'

function App() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'converter'>('calculator');

  return (
    <div className="app-container">
      <div className="tab-buttons">
        <button 
          onClick={() => setActiveTab('calculator')}
          className={activeTab === 'calculator' ? 'active' : ''}
        >
          Calculator
        </button>
        <button 
          onClick={() => setActiveTab('converter')}
          className={activeTab === 'converter' ? 'active' : ''}
        >
          Temperature Converter
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'calculator' ? <Calculator /> : <TemperatureConverter />}
      </div>
    </div>
  )
}

export default App