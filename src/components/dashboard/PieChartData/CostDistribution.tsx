import React from 'react';
import "@/components/dashboard/PieChartData/pie-chart.css"
import { costDistribution } from "@/data/data";

const CostDistribution = () => {
    return (
        <div className="cost-value-holder">
            {costDistribution && costDistribution?.length > 0 && costDistribution.map((item) => 
                    <div key={item?.uid} className={item?.id}>
                        <div className="value-header">{item?.title}</div>
                        <div className="value-count">{item?.percentage}%</div>
                    </div>
            )}
        </div>
    );
};

export default CostDistribution;
