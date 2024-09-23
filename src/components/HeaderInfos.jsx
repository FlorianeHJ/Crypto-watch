import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HeaderInfos = () => {

    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/global").then((res) => setHeaderData(res.data.data))
    }, [])

    return (
        <div className="header-container">
            <header>
              <ul className="title">
                <li>
                    <h1><img src="./assets/logo.png" alt="logo du site" />Watch tower</h1>
                </li>
                <li>Crypto-monnaies : {headerData.active_cryptocurrencies.toLocaleString()}</li>
              </ul>
            </header>
        </div>

    );
};

export default HeaderInfos;