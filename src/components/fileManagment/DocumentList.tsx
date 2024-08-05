"use client"

import React, {useState} from 'react'
import { FaRegFolder } from "react-icons/fa";
import "@/components/fileManagment/DocumentList.css"

const folders = [
    { name: 'Insurance', count: 25, tags:["Auto","2024","+3"] ,selected: true},
    { name: 'Finance', count: 25, tags:["Auto","2024","+3"] },
    { name: 'Report', count: 25, tags:["Auto","2024","+3"] },
    { name: 'HR', count: 25, tags:["Auto","2024","+3"] },
    { name: '2024', count: 25, tags:["Auto","2024","+3"] },
    { name: 'Report', count: 25, tags:["Auto","2024","+3"] },
    { name: 'HR', count: 25, tags:["Auto","2024","+3"] }
  ];

function DocumentList() {
  const [isNewFolder, setIsNewFolder] = useState(false);
  return (
    <div className='file-management-documents'>
        <div className='file-management-add-new' onClick={() => setIsNewFolder(!isNewFolder)}>
        <FaRegFolder className="file-management-folder-icon" />
        <p>New Folder</p>
        {
          isNewFolder &&
          <>
          <input placeholder='Folder name'/>
          <button>Create</button>
          </>
        }
        </div>
    {folders.map((folder, idx) => (
        <div key={idx} className={`file-management-document-folder ${folder?.selected ? 'selected' : ''}`}>
          <FaRegFolder className="file-management-folder-icon" />
          <div className='file-management-title-contianer'>
          <p>{folder.name}</p>
          <div className="file-management-document-count-title">{folder.count}</div>
          </div>
          <div className='file-management-document-tags'>
          {folder?.tags?.map((tag, idx) => 
          <div className="file-management-document-count">{tag}</div>
        )}
        </div>
        </div>
      ))}
    </div>
  )
}

export default DocumentList