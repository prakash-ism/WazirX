import React, {useState} from 'react';
import classes from "./Popup.module.css";
import Dropdown from './Dropdown';
export default function Details(props){
    const [inpVal,setInpVal] = useState("");
    const [currType,setCurrType] = useState("");
    const handleChange = (e) => {
        console.log(e.value);
        setCurrType(e.value);
    }
    return (
        <div className={classes.Detail}>
            <div className={classes.Info}>
                <div>FROM</div>
                <div>TO</div>
            </div>
            <div className={classes.InfoInput}>
                <div className={classes.WrapInput}>
                    <img src="https://s3.amazonaws.com/p-wazirx.cfstage.com/temp/wazirx-logo.svg" />
                    <span>Wazirx</span>
                </div>
                <div>
                    <img src="https://s3.amazonaws.com/p-wazirx.cfstage.com/temp/arrow.svg" />
                </div>
                <div className={classes.WrapInput}>
                <img src="https://s3.amazonaws.com/p-wazirx.cfstage.com/temp/binance-logo.svg" />
                <span>Binance</span>
                </div>
            </div>
            {props.children}
        <div>
            <Dropdown handleChange={handleChange} />
        </div>
        <div>
            <input type="text" onChange={(e) => setInpVal(e.target.value)} />
        </div>
        </div>
    )
}