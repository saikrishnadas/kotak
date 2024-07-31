import React from 'react';
import './FeedbackOverview.css';
import { feedbacks } from '@/data/data';

const FeedbackTable: React.FC = () => {
  return (
    <div className="feedback-table">
      <table className="styled-table">
        <thead>
          <tr>
            <th className="db-head">Document Name</th>
            <th className="db-head">Date</th>
            <th className="db-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks?.length > 0 && feedbacks?.map((item) => (
            <tr key={item?.id}>
              <td className="db-body doc-name">{item?.name}</td>
              <td className="db-body doc-date">{item?.date}</td>
              <td className="db-body doc-desc">{item?.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
