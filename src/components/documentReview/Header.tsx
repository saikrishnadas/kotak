import React from 'react';
import './Header.css';
import { useDocumentStore, useReviewTypeStore } from '@/store';

const Header: React.FC = () => {
  const closeDocumentReview = useDocumentStore(state => state.closeDocumentReview);
  const reviewType = useReviewTypeStore((state) => state.reviewType)
  return (
    <header className="document-review-header">
      <div>
        <h1>Prepare Your Document Review</h1>
        <p>Follow the steps below to set up and start your document review session.</p>
      </div>
      <div className="header-buttons">
        <button className="start-chat-btn">{reviewType === "comparative" && <span className='selected-docs'>4 Selected</span>}Start Chat</button>
        <button className="dismiss-btn" onClick={closeDocumentReview}>Dismiss</button>
      </div>
    </header>
  );
};

export default Header;
