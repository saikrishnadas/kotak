import React from 'react';
import ReviewerTable from './ReviewerTable';
import './TopReviewer.css';

const TopReviewer: React.FC = () => {
  return (
    <article className="reviewer-overview-holder">
      <Header />
      <ReviewerTable />
    </article>
  );
};

const Header: React.FC = () => (
  <header className="table-button-header">
    <h2 className="table-main-header">Top Reviewer</h2>
    <button className="app-btn table-change-button">
      See all
    </button>
  </header>
);

export default TopReviewer;
