import React,{useState} from 'react';
import DocumentList from './DocumentList';
import ChatSession from './ChatSession';
import FeedbackModal from '../modals/FeedbackModal';
// import '@/components/chatConversation/MainLayout.css';

const MainLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="main-layout" style={{    display: "flex", height: "100vh",backgroundColor: "#f1f5f9"}}>
      {isModalOpen && <FeedbackModal />}
      <DocumentList />
      <ChatSession />
    </div>
  );
};

export default MainLayout;
