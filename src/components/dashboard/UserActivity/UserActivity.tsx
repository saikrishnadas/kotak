import React from 'react';
import '@/components/dashboard/UserActivity/UserActivity.css';
import UserBarChart from './UserBarChart';

function UserActivity() {
  return (
    <article className="bar-chart-activity-holder">
      <header className="activity-user">
        <div className="user-count-status">
          <p className="md user-label">User Activity</p>
          <p className="user-set">2,579<span className="md active-user">Active Users</span></p>
        </div>
        <div className="value-indicator">
          <span className="indicator-value">
            <svg className="svg-icon indicator-icon">
              <use href="#indicatorIcon">
                <title>Folder Icon</title>
              </use>
            </svg>
            +2.45%
          </span>
        </div>
      </header>
      <UserBarChart />
    </article>
  );
}

export default UserActivity;
