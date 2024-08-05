import React, { useState } from 'react';
import './DocumentReviewSelector.css';

const DocumentReviewSelector = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="review-selector">
      <p>Would you like to review the documents? Please select the type of review you would like to perform.</p>
      <div className="options">
        <label className={`option ${selectedOption === 'single' ? 'selected' : ''}`}>
          <input 
            type="radio" 
            value="single" 
            checked={selectedOption === 'single'} 
            onChange={handleOptionChange} 
          />
          Review Single Document
          <span className="info-icon">i</span>
        </label>
        <label className={`option ${selectedOption === 'comparative' ? 'selected' : ''}`}>
          <input 
            type="radio" 
            value="comparative" 
            checked={selectedOption === 'comparative'} 
            onChange={handleOptionChange} 
          />
          Comparative Review
          <span className="info-icon">i</span>
        </label>
      </div>
    </div>
  );
};

export default DocumentReviewSelector;
