import React, { useState } from 'react';
import Header from './Header';
import Step from './Step';
import DocumentList from './DocumentList';
import DocumentTable from './DocumentTable';
import ActionRequired from './ActionRequired';
import './DocumentReview.css';
import { CiCircleInfo } from "react-icons/ci";
import { useReviewTypeStore } from '@/store';

const DocumentReview: React.FC = () => {
  // const [selectedReview, setSelectedReview] = useState<string | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const setReviewType = useReviewTypeStore((state) => state.setReviewType)
  const reviewType = useReviewTypeStore((state) => state.reviewType)

  const handleReviewSelection = (type: string) => {
    // setSelectedReview(type);
    setReviewType(type);
    setIsPopupVisible(false);
  };

  const handleLockClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="document-review">
      <Header />
      <main>
        <Step 
          stepNumber={1}
          stepTitle="Select the type of review you want to perform"
        >
          <div className="review-options">
            <button
              className={`review-option ${reviewType === 'single' ? 'selected' : ''}`}
            >
              <input type="radio" name="review" value="single"  onClick={() => handleReviewSelection('single')}/>
              <span>Review Single Document</span>
              <CiCircleInfo className="info-icon" />
            </button>
            <button
              className={`review-option ${reviewType === 'comparative' ? 'selected' : ''}`}
            >
               <input type="radio" name="review" value="single"  onClick={() => handleReviewSelection('comparative')}/>
              <span>Comparative Review</span>
              <CiCircleInfo className="info-icon" />
            </button>
          </div>
        </Step>
        <div style={{width:"100%",height:"2px",backgroundColor:"#ece7e7",marginTop:"20px"}}/>
        <Step 
          stepNumber={2}
          stepTitle="Select the documents you wish to review"
          locked={reviewType === null || reviewType === ""}
          onLockClick={handleLockClick}
        >
          <div className='document-container'>
          {reviewType === null && isPopupVisible && <ActionRequired />}
          <DocumentList disabled={reviewType === null || reviewType === ""} />
          <DocumentTable disabled={reviewType === null || reviewType === ""} />
          </div>
        </Step>
      </main>
    </div>
  );
};

export default DocumentReview;
