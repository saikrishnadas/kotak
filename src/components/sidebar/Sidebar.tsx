// import Image from 'next/image'
import React from 'react'
import "@/components/sidebar/sidebar.css";
import { FaHome, FaFileAlt, FaUsers, FaCog, FaBell, FaSignOutAlt,FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
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
                    <li className="active">
                        <FaHome /><span>Dashboard</span>
                    </li>
                    <li>
                        <FaFileAlt /><span>File Management</span>
                    </li>
                    <li>
                        <FaUsers /><span>Manage Users</span>
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
