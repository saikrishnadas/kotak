import React,{useState} from 'react';
import DocumentList from './DocumentList';
import ChatSession from './ChatSession';
import DocumentReview from '../documentReview/DocumentReview';
import { useDocumentStore } from '@/store';
//import '@/components/chatConversation/MainLayout.css';

const MainLayout: React.FC = () => {
  const isDocumentReviewOpen = useDocumentStore(state => state.isDocumentReviewOpen);
  return (
    <div className="main-layout" style={{display: "flex", height: "100vh",backgroundColor: "white"}}>
      {!isDocumentReviewOpen ? 
      <>
        <DocumentList />
        <ChatSession />
      </> :
        <DocumentReview />
      }
    </div>
  );
};

export default MainLayout;
