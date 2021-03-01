import React from 'react';
import './selectPlayerList.css'
const SelectPlayerList = (props) => {
    return (
        <div className="selectPlayerList">
            <ul>
                {props.playerNameArray.map(name => <li>{name}</li>)}
            </ul>
        </div>
    );
};
export default SelectPlayerList;