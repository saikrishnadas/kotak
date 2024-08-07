import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import "@/components/modals/FeedbackModal.css";

const FeedbackModal: React.FC<any> = ({handleClose}:any) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>We value your feedback!</h2>
        <p>Please let us know why you disliked this response. Your feedback will help us improve.</p>
        <textarea placeholder="Enter your feedback here..."></textarea>
        <div className="modal-actions">
          <button className="submit-btn">
            <FaPaperPlane className="icon" />
            Submit Feedback
          </button>
          <button className="cancel-btn" onClick={handleClose}>Not Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
