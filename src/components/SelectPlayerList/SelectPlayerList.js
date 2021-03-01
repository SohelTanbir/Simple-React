import React from 'react';
import './selectPlayerList.css'
const SelectPlayerList = (props) => {
    return (
        <div className="selectPlayerList">
            <ol>
                {props.playerNameArray.map(name => <li>{name}</li>)}
            </ol>
        </div>
    );
};

export default SelectPlayerList;