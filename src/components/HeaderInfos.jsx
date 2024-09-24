import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PercentChange from './PercentChange';

const HeaderInfos = () => {

    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/global")
            .then((res) => setHeaderData(res.data.data))
    }, [])

    return (
        <div className="header-container">
            
              <ul className="title">
                <li>
                    <h1><img src="./assets/logo.png" alt="logo du site" />Watch tower</h1>
                </li>
                <li>Crypto-monnaies : {" "} 
                {/* Vérifier que la donnée existe bien */}
                {headerData.active_cryptocurrencies &&
             headerData.active_cryptocurrencies.toLocaleString()}
                </li>
                <li>Marchés : {headerData.markets && headerData.markets}</li>
              </ul>
              <ul className="infos-mkt">
                <li className="global-mkt">
                    Global Market Cap : <PercentChange percent={headerData.market_cap_change_percentage_24h_usd} />
                </li>
              </ul>
            
        </div>

    );
};

export default HeaderInfos;