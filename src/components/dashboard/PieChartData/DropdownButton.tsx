import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "@/components/dashboard/PieChartData/pie-chart.css"

const DropdownButton = () => {
    return (
        <button className="app-btn dropdown-selector">
            Monthly
            <FaChevronDown className="drop-arrow-icon" />
        </button>
    );
};

export default DropdownButton;
