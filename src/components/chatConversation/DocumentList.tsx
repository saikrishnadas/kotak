"use client"

import React,{useState} from 'react';
import { FaRegCommentDots,FaFilePdf,FaPlus,FaEllipsisH, FaClosedCaptioning } from 'react-icons/fa';
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
  const [isSearch, setIsSearch] = useState(true);
  return (
    <aside className="document-list-chat">
      <header className="document-list-chat-header">
        <div>
          <h2>New Document Chat</h2>
          <p>Start a chat session</p>
        </div>
        <FaRegCommentDots className="header-icon" onClick={openDocumentReview}/>
      </header>
      <div style={{display:"flex",color:"#909090",fontSize:"12px",justifyContent:"space-between",marginBottom:"10px"}}>
        <p>05 Document Chats</p>
        <div style={{display:"flex",color:"#909090", gap:"10px"}}>
          <FaPlus />
          <FaClosedCaptioning onClick={()=>{setIsSearch(!isSearch)}}/>
        </div>
      </div>
      {isSearch && <input placeholder='search  here' style={{width:"90%",marginBottom:"10px"}}/>}
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
