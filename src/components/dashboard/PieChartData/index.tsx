import { costDistribution } from '@/data/data';
import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

// Transforming costDistribution to match the data format
const data = costDistribution?.map(item => ({
    uid: item.uid,
    name: item.title,
    value: item.percentage,
    fill: item.fill
}));

const PieChartComponent = () => {
    return (
        <>
        {data && data.length > 0 && 
                <PieChart width={200} height={200}>
                <Pie data={data} dataKey="value" outerRadius={80}>
                    {data.map((entry) => (
                        <Cell key={`cell-${entry?.uid}`} fill={entry?.fill} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        }
        </>
    );
};

export default PieChartComponent;
