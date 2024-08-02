import React from 'react';
import { CiLock } from "react-icons/ci";
import './Step.css';

interface StepProps {
  stepNumber: number;
  stepTitle: string;
  locked?: boolean;
  onLockClick?: () => void;
  children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ stepNumber, stepTitle, locked,onLockClick, children }) => {
  return (
    <div className={`step ${locked ? 'locked' : ''}`}>
      <h2>
        Step {stepNumber} {locked && <CiLock className="lock-icon" onClick={onLockClick}/>}
      </h2>
      <p>{stepTitle}</p>
      {children}
    </div>
  );
};

export default Step;
