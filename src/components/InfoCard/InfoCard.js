import React from 'react';
import './infocard.css';
import photo from '../../img/img.jpg';


const InfoCard = () => {
    return (
        <div>
            <div className="player-card">
                <div className="playerImg">
                    <img src={photo} alt="img"/>
                </div>
                <div className="player-info">
                <h5>Mohammad Saifuddin</h5>
                <hr/>
                <ul>
                    <li>Team: Bangladesh</li>
                    <li>Role: Bowler</li>
                    <li>Age: 25 years</li>
                    <li>Height: 1.75 m</li>
                    <li>Salary: $30000</li>
                </ul>
                <button className="btn btn-primary"> Add Now</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;