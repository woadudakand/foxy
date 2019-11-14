import React from 'react';
import { Bar } from 'react-chartjs-2';
import { data } from './config';

const BarChart = () => {
    return (
        <Bar data={data} />
    );
}

export default BarChart;
