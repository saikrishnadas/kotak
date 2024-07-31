import React from 'react';
import './UserUsageOverview.css';
import { userUsageOverview } from '@/data/data';

const UsageTable: React.FC = () => {
  return (
    <div className="usage-table">
      <table className="styled-table">
        <thead>
          <tr>
            <th className="db-head">Name of the user</th>
            <th className="db-head">Average Time Spent</th>
            <th className="db-head">Feedbacks</th>
            <th className="db-head">Last Activity Date</th>
          </tr>
        </thead>
        <tbody>
          {userUsageOverview?.length && userUsageOverview?.map((item) => (
            <tr key={item?.id}>
              <td className="db-body user-name">{item?.user}</td>
              <td className="db-body time-spent">{item?.timeSpent}</td>
              <td className="db-body feedbacks">{item?.feedbacks}</td>
              <td className="db-body last-activity">{item?.lastActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsageTable;
