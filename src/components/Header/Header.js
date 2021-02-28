import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className="header bg-dark py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                            <a href="logo"><span>Game</span>Hat</a>
                        </div>
                    </div>
                    <div className="col-md-9 text-right">
                        <nav>
                            <a href="/home">Home</a>
                            <a href="/player">Players</a>
                            <a href="/team">Team</a>
                            <a href="/contact">Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;