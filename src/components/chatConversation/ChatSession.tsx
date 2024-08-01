import React from 'react';
import { FaFilePdf, FaPlus, FaTimes, FaUserCircle, FaPaperPlane, FaSyncAlt, FaEllipsisH, FaArrowRight, FaThumbsUp,FaThumbsDown } from 'react-icons/fa';
import './ChatSession.css';

const ChatSession: React.FC = () => {
  return (
    <section className="chat-session">
      <header className="chat-header">
        <div className="document-info">
          <FaFilePdf className="pdf-icon" />
          <h2>Policy Terms and Conditions</h2>
          <button className="compare-btn">Comparative review</button>
        </div>
        <div className="chat-actions">
          <button className="add-documents-btn">
            <FaPlus className="icon" /> Add Documents
          </button>
          <div className="document-tags">
            <div className="document-tag">
              <span className="tag-icon">⋮⋮</span>
              Policy Terms and Conditions <FaTimes className="icon" />
            </div>
            <div className="document-tag">
              <span className="tag-icon">⋮⋮</span>
              Claim Processing Guide <FaTimes className="icon" />
            </div>
          </div>
        </div>
      </header>
      <div className="chat-messages">
        <div className="message user">
          <p>What are the conditions for policy renewal?</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message system">
          <div className="response">
            <div className='response-buttons'>
            <button className="response-tag">Policy Terms and Conditions <FaArrowRight className="icon" /></button>
            <button className="response-tag">Claim Processing Guide <FaArrowRight className="icon" /></button>
            </div>
            <div className='message-title-box'>
              <p>Policy Terms...</p>
              <p>Claim Processing...</p>
            </div>
            <div className='message-box'>
              <p>The policy renewal conditions include a no-claims bonus, timely premium payments, and no changes in the insured risk profile.</p>
              <p>The policy renewal conditions include a no-claims bonus, timely premium payments, and no changes in the insured risk profile.</p>
            </div>
          </div>
          <div className='response-side-icons-container'>
          <FaThumbsUp className="response-side-icons" />
          <FaThumbsDown className="response-side-icons" />
          <div style={{width:"200px",height:"2px",backgroundColor:"#e0e0e0"}}/>
          </div>
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>

        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>

        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
        <div className="message user">
          <p>This looks good</p>
          <FaUserCircle className="avatar" />
        </div>
      </div>
      <footer className="chat-footer">
        <input type="text" placeholder="Ask your question..." />
        <button className="send-btn">
          <FaPaperPlane className="icon" />
        </button>
      </footer>
    </section>
  );
};

export default ChatSession;
