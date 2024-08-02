import React from 'react';
import { FaSearch, FaEllipsisH } from 'react-icons/fa';
import './DocumentTable.css';
import { useReviewTypeStore } from '@/store';

const documents = Array.from({ length: 10 }).map((_, idx) => ({
  name: 'Policy Terms and Conditions',
  date: 'July 5, 2023',
  size: '2.4 MB'
}));

interface DocumentTableProps {
  disabled: boolean;
}

const DocumentTable: React.FC<DocumentTableProps> = ({ disabled }) => {
  const reviewType = useReviewTypeStore((state) => state.reviewType)
  return (
    <div className={`document-table ${disabled ? 'disabled' : ''}`}>
      <div className="table-header">
        <div className="table-header-left">
        <div className="header-left">
          <h2>Insurance</h2>
          <button className="more-options-btn"><FaEllipsisH /></button>
        </div>
        <div className="tags">
          <span className="tag">Auto</span>
          <span className="tag">2024</span>
        </div>
        </div>
        <div className="header-right">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" disabled={disabled} />
        </div>
      </div>
      {reviewType !== "comparative" ? 
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
          <tr key={idx} className="table-row">
            <td>
              <input type="radio" name="document" disabled={disabled} style={{marginRight:"10px"}}/>
              {doc.name}
            </td>
            <td style={{color:"#828282",fontWeight:"400"}}>{doc.date}</td>
            <td className="document-size">{doc.size}</td>
            <td className='action-buttons'>
            <div>
              <button className="action-btn primary" disabled={disabled}>Review this doc</button>
              <button className="action-btn secondary" disabled={disabled}>View</button>
            </div>
              <button className="more-options-btn" disabled={disabled}>...</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      : 
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
            <tr key={idx} className="table-row">
              <td>
                <input type="checkbox" name="document" disabled={disabled} style={{marginRight:"10px"}}/>
                {doc.name}
              </td>
              <td style={{color:"#828282",fontWeight:"400"}}>{doc.date}</td>
              <td className="document-size">{doc.size}</td>
              <td className='action-buttons'>
              <div>
                <button className="action-btn primary" disabled={disabled}>Review this doc</button>
                <button className="action-btn secondary" disabled={disabled}>View</button>
              </div>
                <button className="more-options-btn" disabled={disabled}>...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      }

      {/* <div className="pagination">
        <button className="page-btn" disabled={disabled}>1</button>
        <button className="page-btn" disabled={disabled}>2</button>
        <button className="page-btn" disabled={disabled}>3</button>
        <button className="page-btn" disabled={disabled}>...</button>
        <button className="page-btn" disabled={disabled}>24</button>
      </div> */}
    </div>
  );
};

export default DocumentTable;
