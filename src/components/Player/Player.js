import React, { useState } from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './player.css';
import playersData from '../../playersData/playersData.json'
import SelectPlayerList from '../SelectPlayerList/SelectPlayerList';
const Player = ()=>{
    const [selectPlayer, setSelectPlayer] = useState([]);
    const [totalSalary, setTotalSalary] = useState(0);
    const addPlayer = (playersinfo)=>{
        let newSlecetPlaer = playersinfo.name;
        let newSalary = parseInt(playersinfo.salary);
        if(selectPlayer.indexOf(playersinfo.name)=== -1){
            setSelectPlayer([...selectPlayer, newSlecetPlaer]);
            setTotalSalary(totalSalary + newSalary);
        }else{
            alert('Sorry! this player already added');
        }
    }
    return(
        <div className="wrapper">
            <h2>Choose your players </h2>
            <div className="player-container">
                <div className="players">
                   {
                    playersData.map(players => <InfoCard playersinfo={players} addPlayer={addPlayer} key={players.id}/>)
                   }
                </div>
                <div className="addPlayer">
                    <h4>Selected players</h4>
                    <hr/>
                    <div className="selectInfo">
                        <h5>Total Players: {selectPlayer.length}</h5>
                        <h5>Need Budget: {totalSalary}</h5>
                    </div>
                    <div className="selectPlayerName">
                        <hr/>
                        <h4>player Name</h4>
                        <hr/>
                        <SelectPlayerList playerNameArray={selectPlayer}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Player;