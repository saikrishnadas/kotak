import React from 'react';
import './token-bar.css';
import {FaCalendar, FaArrowUp} from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { tokens } from '@/data/data';


const MonthToken: React.FC = () => {
  return (
    <div className="month-token">
      <div className="month-wrapper"> 
        <FaCalendar />
        This Month
      </div>
      <div className="token-count-wrapper">
        <div className="token-set-count">{tokens?.count} Tokens</div>
        <div className="value-indicator">
          <span>Change</span>
          <span className="indicator-value">
            <FaArrowUp />
             +{tokens?.change}%
          </span>
        </div>
      </div>
      <div className="tick-selection">
        <BsCheckCircleFill />
        {tokens?.status}
      </div>
    </div>
  );
};

export default MonthToken;
