import React from 'react';

import { Line } from 'react-chartjs-2'
const AreaChart = (props) => {
    var data = {
        data: {
            labels: props.ctxLabel,
            datasets: [{
              data: props.ctxData1,
              borderColor: props.ctxColor1,
              borderWidth: 'none',
              backgroundColor: '#547df9'
            },{
                data: props.ctxData2,
                borderColor: props.ctxColor2,
                borderWidth: 'none',
                backgroundColor: '#a4d882'
            }]
        },
        options: {
            maintainAspectRatio: true,
            legend: {
                display: false,
                  labels: {
                    display: false
                  }
              },
              scales: {
                yAxes: [{
                  stacked: true,
                  gridLines: {
                    color: '#e5e9f2'
                  },
                  ticks: {
                    beginAtZero:true,
                    fontSize: 10
                  }
                }],
                xAxes: [{
                  stacked: true,
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    beginAtZero:true,
                    fontSize: 11
                  }
                }]
            }
        }
    }
    return (
        <Line data={data.data} height={60} options={data.options} />
    )
}

export default AreaChart;
