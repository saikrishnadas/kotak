import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import CustomBar from '.';
import CustomTick from './CustomTick';
import RenderCustomLabel from './RenderCustomLabel';
import './bar-chart.css';

const data = [
  {
    name: "00AM-3AM",
    value: 560,
  },
  {
    name: "4AM-7PM",
    value: 400,
  },
  {
    name: "8AM-11PM",
    value: 700,
  },
  {
    name: "12AM-3PM",
    value: 500,
  },
  {
    name: "4AM-7AM",
    value: 600,
  },
  {
    name: "8AM-11AM",
    value: 500,
  },
];

export default class UserBarChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8";

  render() {
    return (
      <div className="activity-wrapper">
        <ResponsiveContainer width="100%" height="97%">
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={15}
          >
            <defs>
              <linearGradient id="customGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5.56%" stopColor="#00366F" />
                <stop offset="100%" stopColor="rgba(198, 227, 244, 0.47)" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
              tickMargin={10}
              axisLine={false}
              tickLine={false}
              tick={<CustomTick />}
              interval={0}
            />
            <Bar
              dataKey="value"
              fill="url(#customGradient)"
              background={{ fill: "transparent" }}
              shape={(props:any) => <CustomBar {...props} />}
            >
              <LabelList dataKey="value" content={RenderCustomLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
