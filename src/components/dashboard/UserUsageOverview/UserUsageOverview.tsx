import React from 'react';
import UsageTable from './UsageTable';
import './UserUsageOverview.css';
import {FaEllipsisH} from "react-icons/fa";

const UserUsageOverview: React.FC = () => {
  return (
    <article className="card usage-overview-holder">
      <Header />
      <UsageTable />
    </article>
  );
};

const Header: React.FC = () => (
  <header className="table-button-header">
    <h2 className="table-main-header">User Usage Overview</h2>
    <button className="app-btn table-change-button">
       <span><FaEllipsisH /></span>
    </button>
  </header>
);

export default UserUsageOverview;
