import React, { useState, useEffect } from 'react';
import SliderMovie from '../Slider';
import './style.css';

function Realeases() {   
    return (
        <section className="main-realeases">
            <h1 className="title">
                Realeases
            </h1>

            <div className="slider">
                 <SliderMovie /> 
            </div> 

        </section>
    );
};

export default Realeases