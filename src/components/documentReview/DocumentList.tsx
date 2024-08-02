import React from 'react';
import { FaRegFolder } from "react-icons/fa";
import './DocumentList.css';

const folders = [
  { name: 'Insurance', count: 25, tags:["Auto","2024","+3"] ,selected: true},
  { name: 'Finance', count: 25, tags:["Auto","2024","+3"] },
  { name: 'Report', count: 25, tags:["Auto","2024","+3"] },
  { name: 'HR', count: 25, tags:["Auto","2024","+3"] },
  { name: '2024', count: 25, tags:["Auto","2024","+3"] },
  { name: 'Report', count: 25, tags:["Auto","2024","+3"] },
  { name: 'HR', count: 25, tags:["Auto","2024","+3"] },
  { name: '2024', count: 25, tags:["Auto","2024","+3"] },
];

interface DocumentListProps {
  disabled: boolean;
}

const DocumentList: React.FC<DocumentListProps> = ({ disabled }) => {

  return (
    <div className={`document-list ${disabled ? 'disabled' : ''}`}>
      {folders.map((folder, idx) => (
        <div key={idx} className={`document-folder ${folder?.selected ? 'selected' : ''}`}>
          <FaRegFolder className="folder-icon" />
          <div className='title-contianer'>
          <p>{folder.name}</p>
          <div className="document-count-title">{folder.count}</div>
          </div>
          <div className='document-tags'>
          {folder?.tags?.map((tag, idx) => 
          <div className="document-count">{tag}</div>
        )}
        </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
