import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStableState } from '../action/stable.action';

const TableFilters = () => {
    const [showStable, setshowStable] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setStableState(showStable))
    }, [showStable, dispatch])
    
    return (
       <div className="table-filters">
        <div className="table-filters-container">
            <div className="stable-checkbox-container">
                <input type="checkbox" id='stableCoin' defaultChecked={true} onChange={() => setshowStable(!showStable)}/>
                <label htmlFor="stableCoin">{showStable ? "Avec stable coin" : "Sans stable coin"}</label>
            </div>
            <div className="no-list-btn">
                <p>Aucune liste</p>
            </div>
            <div className="fav-list">
                <p>Liste des favoris</p>
                <img src="./assets/star-full.svg" alt="icon star" />
            </div>
        </div>        
       </div>
    );
};

export default TableFilters;