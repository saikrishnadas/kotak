import React from 'react';
import FeedbackTable from './FeedbackTable';
import './FeedbackOverview.css';
import {FaEllipsisH} from "react-icons/fa";

const FeedbackOverview: React.FC = () => {
  return (
    <article className="card feedback-overview-holder">
      <Header />
      <FeedbackTable />
    </article>
  );
};

const Header: React.FC = () => (
  <header className="table-button-header">
    <h2 className="table-main-header">Feedbacks Overview</h2>
    <button className="app-btn table-change-button">
    <span><FaEllipsisH /></span>
    </button>
  </header>
);

export default FeedbackOverview;
