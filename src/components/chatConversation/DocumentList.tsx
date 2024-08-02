import React from 'react';
import { FaRegCommentDots,FaFilePdf,FaPlus,FaEllipsisH } from 'react-icons/fa';
import './DocumentList.css';
import {useDocumentStore} from "@/store"

const documents = [
  { title: 'Policy Terms and Conditions', lastAccessed: '12:34 PM, July 4', interactions: 10, hasAttachment: true },
  { title: 'Claim Processing Guide', lastAccessed: '12:34 PM, July 4', interactions: 10, selected: true },
  { title: 'Annual Risk Assessment', lastAccessed: '12:34 PM, July 4', interactions: 10 },
  { title: 'Financial Summary', lastAccessed: '12:34 PM, July 4', interactions: 10, hasAttachment: true },
  { title: 'Customer Feedback Report', lastAccessed: '12:34 PM, July 4', interactions: 10 },
];

const DocumentList: React.FC = () => {
  const openDocumentReview = useDocumentStore(state => state.openDocumentReview);
  return (
    <aside className="document-list-chat">
      <header className="document-list-chat-header">
        <div>
          <h2>New Document Chat</h2>
          <p>Start a chat session</p>
        </div>
        <FaRegCommentDots className="header-icon" onClick={openDocumentReview}/>
      </header>
      <ul>
        {documents.map((doc, index) => (
          <li key={index} className={`document-item ${doc.selected ? 'selected' : ''}`}>
            <div className="document-info">
              <FaFilePdf className="pdf-icon" />
                <h2>{doc.title}</h2>
                {doc.hasAttachment && (
                <button className="attachment-btn">
                  <FaPlus className="icon" />
                  +1
                </button>
              )}
            </div>
            <div className="interactions">
                <p>Last accessed on {doc.lastAccessed}</p>
                <span>{doc.interactions} Interactions</span>
              </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DocumentList;
