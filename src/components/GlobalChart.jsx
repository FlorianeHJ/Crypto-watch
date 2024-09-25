import React, { useEffect, useState } from 'react';
import { Treemap } from 'recharts';

const GlobalChart = ({ coinsData }) => {
    
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        let chartData = [];

        if (coinsData.length > 0) {
            for (let i = 0; i < 45; i ++) {
                chartData.push({
                    name: coinsData[i].symbol.toUpperCase() + " " + coinsData[i].market_cap_change_percentage_24h.toFixed(1) + "%",
                    size: coinsData[i].market_cap,
                    fill: null,

                })
            }
        }
        setDataArray(chartData);
        
    }, [coinsData]);
    
    return (
        <div className="global-chart">
            <Treemap 
            width={730}
            height={181}
            data={dataArray}
            dataKey="size"
            stroke="rgb(51,51,51)"
            fill='black'
            />
        </div>
    );
};

export default GlobalChart;