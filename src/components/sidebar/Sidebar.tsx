"use client";

// import Image from 'next/image'
import React,{useState} from 'react'
import "@/components/sidebar/sidebar.css";
import { FaHome, FaFileAlt, FaUsers, FaCog, FaBell, FaSignOutAlt,FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';


const Sidebar = () => {
     const [active, setActive] = useState("dashboard");
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="https://via.placeholder.com/100x50" alt="Kotak" />
                <p>Powered by Quality Kiosk</p>
            </div>
            <div className='menu-container'>
            <div className="menu">
                <p>Get answers from your documents instantly.</p>
                <ul>
                    <li className={active === "dashboard" ? "active" : ""}>
                        <Link href="/dashboard" onClick={() => setActive("dashboard")}>
                            <FaHome /><span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={active === "file-management" ? "active" : ""}>
                        <Link href="/file-management" onClick={() => setActive("file-management")}>
                            <FaFileAlt /><span>File Management</span>
                        </Link>
                    </li>
                    <li className={active === "manage-user" ? "active" : ""}>
                    <Link href="/dashboard" onClick={() => setActive("manage-user")}>
                        <FaUsers /><span>Manage Users</span>
                    </Link>
                    </li>
                    <li className={active === "ask-questions" ? "active" : ""}>
                    <Link href="/chat" onClick={() => setActive("ask-questions")}>
                        <FaUsers /><span>Ask Question</span>
                    </Link>
                    </li>
                    <li className={active === "all-documents" ? "active" : ""}>
                    <Link href="/all-documents" onClick={() => setActive("all-documents")}>
                        <FaUsers /><span>All Documents</span>
                    </Link>
                    </li>
                </ul>
            </div>
            <div>
            <div className="bottom-menu">
                <ul>
                    <li>
                        <FaCog /><span>Settings</span>
                    </li>
                    <li>
                        <FaBell /><span>Notifications</span>
                    </li>
                </ul>
            </div>
            <div className='line-separator'/>
            <div className="user-info">
                <FaUserCircle />
                <div>
                    <p>Mehul Vora</p>
                    <span>Admin</span>
                </div>
                <FaSignOutAlt />
            </div>
            </div>
            </div>
        </div>
    );
};

export default Sidebar;
