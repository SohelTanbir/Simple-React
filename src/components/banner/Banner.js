import React from 'react';
import bannerImg from '../../img/banner2.jpg';
import './banner.css';


const Banner = () => {
    return (
        <div className="banner-wrapper">
            <img src={bannerImg} alt="bannerImage not found"/>
        </div>
    );
};

export default Banner;