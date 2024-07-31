import React, { PureComponent } from 'react';
import MonthToken from './MonthToken';
import TokenBarChart from './TokenBarChart';
import './token-bar.css';

export default class TokenBar extends PureComponent {
  render() {
    return (
      <div className="tokens-wrapper">
        <MonthToken />
        <div className="token-chart">
          <TokenBarChart />
        </div>
      </div>
    );
  }
}
