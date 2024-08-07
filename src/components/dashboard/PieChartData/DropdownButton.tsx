import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "@/components/dashboard/PieChartData/pie-chart.css"

const DropdownButton = () => {
    return (
        <div className="dropdown-selector-wrapper">
            <select className="app-btn dropdown-selector">
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
            <FaChevronDown className="drop-arrow-icon" />
        </div>
    );
};

export default DropdownButton;
