import React from 'react';
import './TopReviewer.css';
import { reviewers } from '@/data/data';

const ReviewerTable: React.FC = () => {
  return (
    <div className="reviewer-table" >
      <table className="styled-table">
        <thead>
          <tr>
            <th className="db-head">Name</th>
            <th className="db-head">Reviewed</th>
            <th className="db-head">Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviewers?.length && reviewers?.map((item) => (
            <tr key={item?.id}>
              <td className="db-body user-name">{item?.name}</td>
              <td className="db-body reviewed">{item?.reviewed}</td>
              <td className="db-body rating">
                <div className="rating-bar" style={{ width: `${item?.rating * 100}%` }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewerTable;
