import React from 'react';
import classes from "./Popup.module.css";

export default function Description(props){
    return (
        <div className={classes.TopBar}>
            <div className={classes.Desc}>
                {props.description}
            </div>
            <div className={classes.CloseButton} onClick={props.closePopup}>x
        </div>
        </div>
    )
}