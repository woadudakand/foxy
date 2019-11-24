import React from 'react';
import Chart from 'react-google-charts';

const GoogleArea = () => {
    return (
        <Chart
            width={'100%'}
            height={'494px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Year', 'Sales'],
                ['2013', 1000],
                ['2014', 1170],
                ['2015', 660],
                ['2016', 960],
                ['2017', 630],
                ['2018', 930],
                ['2019', 730],              
            ]}
            
            options={{
                title: 'Company Performance',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                opacity: 1,
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: '80%', height: '80%', opacity: 1 },  
                fillColor: '#ddd',              
                // lineWidth: 25  
                series: [
                    {color: 'green', opacity: 1},                                      
                ],
                
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
        />
    );
}

export default GoogleArea;
