import React from 'react';

import { Doughnut } from 'react-chartjs-2';

const DoughnutCon = (props) => {
    var data = {
        data: {
            labels: props.ctxLabel,
            datasets: [{
              data: props.ctxData1,
              borderColor: props.ctxColor1,
              borderWidth: 1,
              backgroundColor: ['#a8e0ff', '#8ee3f5']
            }]
        },
        options: {
            maintainAspectRatio: true,
        }
    }
    return (
        <Doughnut 
            data={data.data} 
            height={200} 
            options={data.options}             
        />
    )
}

export default DoughnutCon;
