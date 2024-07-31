import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import CustomBar from '.';
import { tokenChartData } from '@/data/data';

const TokenBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="70%">
      <BarChart
        width={800}
        height={300}
        data={tokenChartData}
        margin={{
          top: 5,
          right: 80,
          left: 50,
          bottom: 5,
        }}
        barSize={15}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 10, right: 10 }}
          tickMargin={10}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#A3AED0', fontWeight: 600 }}
        />
        <Bar
          dataKey="value"
          fill="#2B3674"
          background={{ fill: 'transparent' }}
          shape={(props: any) => <CustomBar {...props} />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TokenBarChart;
