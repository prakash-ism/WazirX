import React from 'react';
import Actions from './Actions';
import Description from './Description';
import Details from './Details';
import classes from "./Popup.module.css";

export default function Popup(props){

    return(
        <div className={classes.Popup}>
        <Description description={"Transfer to Binance"}/>
        <Details  />
        <Actions  /> 
        
        </div>
    )
}