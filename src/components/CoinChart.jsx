import React from 'react';

const CoinChart = ({ coinId, coinName}) => {
    const headerData = [
        [1, "1 jour"],
        [3, "3 jours"],
        [7, "7 jours"],
        [30, "1 mois"],
        [91, "3 mois"],
        [181, "6 mois"],
        [365, "1 an"],
        [3000, "Max"],

    ]

    return (
        <div className="coin-chart">
            <p>{coinName}</p>
            
        </div>
    );
};

export default CoinChart;