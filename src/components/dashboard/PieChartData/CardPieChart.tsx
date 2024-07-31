import React from 'react';
import PieChartComponent from '.';
import CostDistribution from './CostDistribution';
import DropdownButton from './DropdownButton';
import "@/components/dashboard/PieChartData/pie-chart.css"


const CardPieChart = () => {
    return (
        <div className="card-pie-chart">
            <div className="pie-chart-wrapper">
                <div className="header-dropdown">
                    <h2 className="chart-header">Cost Distribution</h2>
                    <DropdownButton />
                </div>
                <div className="pie-chart-holder">
                    <PieChartComponent />
                </div>
                <CostDistribution />
            </div>
        </div>
    );
};

export default CardPieChart;
