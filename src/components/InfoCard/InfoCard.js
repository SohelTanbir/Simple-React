import React from 'react';
import './infocard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const InfoCard = (props) => {
    const {name,img,age,role,height,team,salary} = props.playersinfo;
    const addPlayer = props.addPlayer;
    return (
        <div>
            <div className="player-card">
                <div className="playerImg">
                    <img src={img} alt="img"/>
                </div>
                <div className="player-info">
                <h5>{name}</h5>
                <hr/>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCheck}/> Team: {team}</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck}/> Role: {role}</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck}/> Age: {age} years</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck}/> Height: {height} m</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck}/> Salary Tk: {salary}</li>
                </ul>
                <button className="btn btn-primary" onClick={()=> addPlayer(props.playersinfo)}><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;