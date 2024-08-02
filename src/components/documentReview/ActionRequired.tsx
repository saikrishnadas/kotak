import React from 'react';
import { CiLock } from "react-icons/ci";
import './ActionRequired.css';

const ActionRequired: React.FC = () => {
  return (
    <div className="action-required">
      <div>
        <strong>Action Required</strong>
        <p>Please select the type of review you would like to perform (single document or comparative review) before proceeding to choose the documents for your review session.</p>
      </div>
    </div>
  );
};

export default ActionRequired;
