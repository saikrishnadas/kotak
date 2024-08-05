"use client"

import React,{useState} from 'react'
import { FaSearch, FaEllipsisH, FaPage4 } from 'react-icons/fa';
import "@/components/fileManagment/DocumentTable.css";
import DocumentReviewSelector from '../allDocuments/DocumentReviewSelector';

const documents = Array.from({ length: 15 }).map((_, idx) => ({
    name: 'Policy Terms and Conditions',
    date: 'July 5, 2023',
    size: '2.4 MB'
  }));
  

function DocumentTable({isAllDocuments}:any) {
  const [searchBarOpen, isSearchBarOpen] = useState(false);
  return (
    <div className='file-managment-document-table'>
      {isAllDocuments && <DocumentReviewSelector />}
    <div className="file-managment-table-header">
      <div className="file-managment-table-header-left">
      <div className="file-managment-header-left">
        <h2>Insurance</h2>
        <button className="file-managment-more-options-btn"><FaEllipsisH /></button>
      </div>
      <div className="file-managment-tags">
        <span className="file-managment-tag">Auto</span>
        <span className="file-managment-tag">2024</span>
      </div>
      </div>
      <div className="file-managment-header-right">
        <FaSearch className="file-managment-search-icon" onClick={() => isSearchBarOpen(!searchBarOpen)}/>
        {searchBarOpen && <input type="text" placeholder="Search" /> }
        <button className='upload-button'>Upload PDF <FaPage4 /> </button>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Document Name</th>
          <th>Date Last Accessed</th>
          <th>Size</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc, idx) => (
          <tr key={idx} className="file-managment-table-row">
            <td>
              <input type="checkbox" name="document" style={{marginRight:"10px"}}/>
              {doc.name}
            </td>
            <td style={{color:"#828282",fontWeight:"400"}}>{doc.date}</td>
            <td className="file-managment-document-size">{doc.size}</td>
            <td className='file-managment-action-buttons'>
            <div>
              <button className='file-management-action-btn-review'>View Document</button>
              <button className="file-managment-more-options-btn">...</button>
            </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* <div className="pagination">
      <button className="page-btn" disabled={disabled}>1</button>
      <button className="page-btn" disabled={disabled}>2</button>
      <button className="page-btn" disabled={disabled}>3</button>
      <button className="page-btn" disabled={disabled}>...</button>
      <button className="page-btn" disabled={disabled}>24</button>
    </div> */}
  </div>
  )
}

export default DocumentTable