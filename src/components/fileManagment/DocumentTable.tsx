"use client"

import React, { useState } from 'react';
import { FaSearch, FaEllipsisH, FaPage4 } from 'react-icons/fa';

import "@/components/fileManagment/DocumentTable.css";
import DocumentReviewSelector from '../allDocuments/DocumentReviewSelector';

const documents = Array.from({ length: 15 }).map((_, idx) => ({
    name: 'Policy Terms and Conditions',
    date: 'July 5, 2023',
    size: '2.4 MB'
}));

function DocumentTable({ isAllDocuments }: any) {
    const [searchBarOpen, isSearchBarOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [tableMenuOpen, setTableMenuOpen] = useState(Array(documents.length).fill(false));

    const options = [
        'Upload File',
        'Generate Report',
        'Delete Folder'
    ];

  const optionsTable = [
      'Generate Report',
      'Delete Folder'
  ];

    const handleDropdownSelect = (option:any) => {
        console.log(`Selected: ${option}`);
        setMenuOpen(false);
    };

    const handleTableDropdownSelect = (option:any, index:any) => {
        console.log(`Selected: ${option} for document ${index}`);
        const newTableMenuOpen = [...tableMenuOpen];
        newTableMenuOpen[index] = false;
        setTableMenuOpen(newTableMenuOpen);
    };

    const toggleTableMenu = (index:any) => {
        const newTableMenuOpen = [...tableMenuOpen];
        newTableMenuOpen[index] = !newTableMenuOpen[index];
        setTableMenuOpen(newTableMenuOpen);
    };

    return (
        <div className='file-managment-document-table'>
            {isAllDocuments && <DocumentReviewSelector />}
            <div className="file-managment-table-header">
                <div className="file-managment-table-header-left">
                    <div className="file-managment-header-left">
                        <h2>Insurance</h2>
                        <div className="dropdown-wrapper">
                            <button className="file-managment-more-options-btn" onClick={() => setMenuOpen(!menuOpen)}>
                                <FaEllipsisH />
                            </button>
                            {menuOpen && (
                                <div className="dropdown-container">
                                    <div className="dropdown-arrow"></div>
                                    <ul className="dropdown-menu">
                                        {options.map((option, index) => (
                                            <li key={index} onClick={() => handleDropdownSelect(option)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="file-managment-tags">
                        <span className="file-managment-tag">Auto</span>
                        <span className="file-managment-tag">2024</span>
                    </div>
                </div>
                <div className="file-managment-header-right">
                    <FaSearch className="file-managment-search-icon" onClick={() => isSearchBarOpen(!searchBarOpen)} />
                    {searchBarOpen && <input type="text" placeholder="Search" />}
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
                                <input type="checkbox" name="document" style={{ marginRight: "10px" }} />
                                {doc.name}
                            </td>
                            <td style={{ color: "#828282", fontWeight: "400" }}>{doc.date}</td>
                            <td className="file-managment-document-size">{doc.size}</td>
                            <td className='file-managment-action-buttons'>
                                <div>
                                    <button className='file-management-action-btn-review'>View Document</button>
                                    <div className="dropdown-wrapper">
                                        <button className="file-managment-more-options-btn" onClick={() => toggleTableMenu(idx)}>...</button>
                                        {tableMenuOpen[idx] && (
                                            <div className="dropdown-container">
                                                <div className="dropdown-arrow"></div>
                                                <ul className="dropdown-menu">
                                                    {optionsTable.map((option, index) => (
                                                        <li key={index} onClick={() => handleTableDropdownSelect(option, idx)}>
                                                            {option}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DocumentTable;
