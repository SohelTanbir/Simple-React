import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './player.css';




const Player = ()=>{
    return(
        <div className="wrapper">
            <h2>Choose your favorite players </h2>
            <div className="player-container">
                <div className="players">
                    <InfoCard></InfoCard>
                    <InfoCard></InfoCard>
                </div>
                <div className="addPlayer">
                    <h4>Add players</h4>
                </div>
            </div>
        </div>
    )
}
export default Player;