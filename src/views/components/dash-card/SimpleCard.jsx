import React from 'react';
import './mystyle.css';

export const SimpleCard=(props)=>{
    return (
        <div class="main-div">
        <div class="img-div">
            <img class="icon-img" 
            src={props.url}></img>
        </div>
        <div class="info-div"> 
        <div class="value-div">
        {props.value}
        </div>
        <div className="key-div">
        {props.infokey}
        </div>
        </div>
    </div>
    )
}